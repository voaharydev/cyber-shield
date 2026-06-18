'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type PcLockState = 'VERROUILLE' | 'DEVERROUILLE';

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
  const [tempsRestant, setTempsRestant] = useState<number | null>(null);
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

  const handleMessage = useCallback(
    (payload: Record<string, unknown>) => {
      addEvent(payload);
      const event = payload.event as string | undefined;

      switch (event) {
        case 'unlock_success':
          setLockState('DEVERROUILLE');
          break;
        case 'command_lock':
          setLockState('VERROUILLE');
          setTempsRestant(null);
          break;
        case 'time_update':
          if (typeof payload.tempsRestant === 'number') {
            setTempsRestant(payload.tempsRestant);
          }
          break;
      }
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
    setTempsRestant(null);

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
  }, [cyberId, numeroPoste, wsUrl, reconnectKey, handleMessage, addEvent]);

  const tryUnlock = useCallback(
    (code: string) => {
      if (wsRef.current?.readyState !== WebSocket.OPEN) {
        addEvent({ event: 'error', message: 'Non connecté au serveur' });
        return;
      }

      wsRef.current.send(
        JSON.stringify({
          event: 'try_unlock',
          code: code.trim().toUpperCase(),
        }),
      );
    },
    [addEvent],
  );

  const reconnect = useCallback(() => {
    setReconnectKey((k) => k + 1);
  }, []);

  const clearEvents = useCallback(() => setEvents([]), []);

  return {
    connected,
    connectionError,
    wsUrl,
    lockState,
    tempsRestant,
    events,
    tryUnlock,
    reconnect,
    clearEvents,
  };
}
