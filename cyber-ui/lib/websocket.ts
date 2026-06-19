'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface PosteState {
  numeroPoste: number;
  statut: 'VERROUILLE' | 'EN_COURS' | 'A_PAYER';
  connected: boolean;
  typeSession: 'PREPAID' | 'POSTPAID' | null;
  tempsRestant: number | null;
  tempsEcouleMinutes: number | null;
  montantEstime: number | null;
  montantDu: number | null;
  ticketCode: string | null;
}

interface GlobalUpdateMessage {
  event: 'global_update';
  postes: PosteState[];
}

const WS_BASE =
  process.env.NEXT_PUBLIC_WS_BASE ??
  process.env.NEXT_PUBLIC_WS_URL?.replace(/\?.*$/, '') ??
  'ws://localhost:5001/cyber';

const RECONNECT_DELAY_MS = 3000;

function buildDashboardUrl(cyberId: string): string {
  return `${WS_BASE}?cyber=${encodeURIComponent(cyberId)}&role=dashboard`;
}

export function useCyberSocket(cyberId: string | null) {
  const [postes, setPostes] = useState<PosteState[]>([]);
  const [connected, setConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const connect = useCallback(() => {
    if (!cyberId) {
      setConnected(false);
      setPostes([]);
      return;
    }

    if (wsRef.current?.readyState === WebSocket.OPEN) {
      return;
    }

    try {
      const ws = new WebSocket(buildDashboardUrl(cyberId));
      wsRef.current = ws;

      ws.onopen = () => setConnected(true);

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data as string) as GlobalUpdateMessage;
          if (data.event === 'global_update' && Array.isArray(data.postes)) {
            setPostes(data.postes);
          }
        } catch {
          // ignore malformed messages
        }
      };

      ws.onclose = () => {
        setConnected(false);
        wsRef.current = null;
        reconnectTimerRef.current = setTimeout(connect, RECONNECT_DELAY_MS);
      };

      ws.onerror = () => ws.close();
    } catch {
      reconnectTimerRef.current = setTimeout(connect, RECONNECT_DELAY_MS);
    }
  }, [cyberId]);

  useEffect(() => {
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }
    wsRef.current?.close();
    wsRef.current = null;
    connect();

    return () => {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }
      wsRef.current?.close();
    };
  }, [connect, cyberId]);

  return { postes, connected };
}

export type PosteColor = 'green' | 'blue' | 'orange' | 'yellow' | 'red';

export function getPosteColor(poste: PosteState): PosteColor {
  if (poste.statut === 'A_PAYER') {
    return 'orange';
  }
  if (poste.statut === 'EN_COURS' && poste.typeSession === 'POSTPAID') {
    return 'blue';
  }
  if (poste.statut === 'EN_COURS') {
    return 'green';
  }
  if (poste.connected) {
    return 'yellow';
  }
  return 'red';
}
