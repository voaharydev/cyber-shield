'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type PcLockState = 'VERROUILLE' | 'DEVERROUILLE';
export type PcSessionType = 'PREPAID' | 'POSTPAID' | null;

export interface PcEventLog {
  id: string;
  timestamp: Date;
  payload: Record<string, unknown>;
}

const WS_BASE =
  process.env.NEXT_PUBLIC_WS_BASE ??
  process.env.NEXT_PUBLIC_WS_URL?.replace(/\?.*$/, '') ??
  'ws://localhost:5001/cyber';

function buildPcUrl(cyberId: string, numeroPoste: number): string {
  return `${WS_BASE}?cyber=${encodeURIComponent(cyberId)}&poste=${numeroPoste}`;
}

export function usePcTestSocket(cyberId: string | null, numeroPoste: number) {
  const [connected, setConnected] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [lockState, setLockState] = useState<PcLockState>('VERROUILLE');
  const [typeSession, setTypeSession] = useState<PcSessionType>(null);
  const [tempsRestant, setTempsRestant] = useState<number | null>(null);
  const [tempsEcoule, setTempsEcoule] = useState<number | null>(null);
  const [montantEstime, setMontantEstime] = useState<number | null>(null);
  const [events, setEvents] = useState<PcEventLog[]>([]);
  const [reconnectKey, setReconnectKey] = useState(0);
  const wsRef = useRef<WebSocket | null>(null);
  const wsUrl =
    cyberId != null ? buildPcUrl(cyberId, numeroPoste) : '';

  const addEvent = useCallback((payload: Record<string, unknown>) => {
    setEvents((prev) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        timestamp: new Date(),
        payload,
      },
      ...prev.slice(0, 49),
    ]);
  }, []);

  const resetSessionDisplay = useCallback(() => {
    setTypeSession(null);
    setTempsRestant(null);
    setTempsEcoule(null);
    setMontantEstime(null);
  }, []);

  const handleMessage = useCallback(
    (payload: Record<string, unknown>) => {
      addEvent(payload);
      const event = payload.event as string | undefined;

      switch (event) {
        case 'unlock_success':
          setLockState('DEVERROUILLE');
          setTypeSession(
            payload.typeSession === 'POSTPAID' ? 'POSTPAID' : 'PREPAID',
          );
          if (payload.typeSession === 'POSTPAID') {
            setTempsRestant(null);
            setTempsEcoule(0);
            setMontantEstime(0);
          }
          break;
        case 'command_lock':
        case 'session_stopped':
          setLockState('VERROUILLE');
          resetSessionDisplay();
          break;
        case 'time_update':
          if (payload.typeSession === 'POSTPAID') {
            setTypeSession('POSTPAID');
            if (typeof payload.tempsEcoule === 'number') {
              setTempsEcoule(payload.tempsEcoule);
            }
            if (typeof payload.montantEstime === 'number') {
              setMontantEstime(payload.montantEstime);
            }
          } else if (typeof payload.tempsRestant === 'number') {
            setTypeSession('PREPAID');
            setTempsRestant(payload.tempsRestant);
          }
          break;
      }
    },
    [addEvent, resetSessionDisplay],
  );

  const sendEvent = useCallback(
    (payload: Record<string, unknown>) => {
      if (wsRef.current?.readyState !== WebSocket.OPEN) {
        addEvent({ event: 'error', message: 'Non connecté au serveur' });
        return;
      }
      wsRef.current.send(JSON.stringify(payload));
    },
    [addEvent],
  );

  useEffect(() => {
    if (!cyberId) {
      setConnected(false);
      return;
    }

    let cancelled = false;

    setConnected(false);
    setConnectionError(null);
    setLockState('VERROUILLE');
    resetSessionDisplay();

    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      if (!cancelled) {
        setConnected(true);
        setConnectionError(null);
      }
    };

    ws.onmessage = (event) => {
      if (cancelled) return;
      try {
        const data = JSON.parse(event.data as string) as Record<string, unknown>;
        handleMessage(data);
      } catch {
        addEvent({ event: 'error', message: 'JSON invalide' });
      }
    };

    ws.onerror = () => {
      if (!cancelled) {
        setConnectionError('Connexion WebSocket échouée');
      }
    };

    ws.onclose = () => {
      if (!cancelled) {
        setConnected(false);
      }
    };

    return () => {
      cancelled = true;
      ws.onopen = null;
      ws.onclose = null;
      ws.onerror = null;
      ws.onmessage = null;
      ws.close();
      wsRef.current = null;
    };
  }, [
    cyberId,
    numeroPoste,
    wsUrl,
    reconnectKey,
    handleMessage,
    addEvent,
    resetSessionDisplay,
  ]);

  const tryUnlock = useCallback(
    (code: string) => {
      sendEvent({
        event: 'try_unlock',
        code: code.trim().toUpperCase(),
      });
    },
    [sendEvent],
  );

  const tryPostpaidStart = useCallback(() => {
    sendEvent({ event: 'try_postpaid_start' });
  }, [sendEvent]);

  const stopPostpaid = useCallback(() => {
    sendEvent({ event: 'stop_postpaid' });
  }, [sendEvent]);

  const ping = useCallback(() => {
    sendEvent({ event: 'ping' });
  }, [sendEvent]);

  const reconnect = useCallback(() => {
    setReconnectKey((k) => k + 1);
  }, []);

  const clearEvents = useCallback(() => setEvents([]), []);

  return {
    connected,
    connectionError,
    wsUrl,
    lockState,
    typeSession,
    tempsRestant,
    tempsEcoule,
    montantEstime,
    events,
    tryUnlock,
    tryPostpaidStart,
    stopPostpaid,
    ping,
    reconnect,
    clearEvents,
  };
}
