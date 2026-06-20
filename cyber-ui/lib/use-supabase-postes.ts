'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { buildPosteStateFromRows } from '@cyber-shield/domain/ui';
import type { PosteState } from '@/lib/websocket';

export function useSupabasePostes(cyberId: string | null) {
  const [postes, setPostes] = useState<PosteState[]>([]);
  const [connected, setConnected] = useState(false);

  const rebuild = useCallback(
    (
      sessions: Array<{
        numeroPoste: number;
        statut: string;
        typeSession: string | null;
        tempsDebut: string | Date | null;
        baseTarifHoraire: number | string;
        montantDu: number | string | null;
        ticketActuelId: string | null;
        id?: string;
      }>,
      tickets: Map<string, { tempsRestant: number; codeUnique: string }>,
      presences: Map<number, { connected: boolean }>,
    ) => {
      const merged = sessions
        .sort((a, b) => a.numeroPoste - b.numeroPoste)
        .map((session) =>
          buildPosteStateFromRows(
            {
              numeroPoste: session.numeroPoste,
              statut: session.statut,
              typeSession: session.typeSession,
              tempsDebut: session.tempsDebut
                ? new Date(session.tempsDebut as string)
                : null,
              baseTarifHoraire: Number(session.baseTarifHoraire ?? 2),
              montantDu:
                session.montantDu != null ? Number(session.montantDu) : null,
              ticketActuel: session.ticketActuelId
                ? tickets.get(session.ticketActuelId) ?? null
                : null,
            },
            presences.get(session.numeroPoste) ?? null,
          ),
        );
      setPostes(merged);
    },
    [],
  );

  const loadInitial = useCallback(async () => {
    if (!cyberId) {
      setPostes([]);
      setConnected(false);
      return;
    }

    const supabase = createClient();

    const [sessionsRes, presenceRes, ticketsRes] = await Promise.all([
      supabase
        .from('SessionOrdinateur')
        .select('*')
        .eq('cyberId', cyberId)
        .order('numeroPoste'),
      supabase.from('PostePresence').select('*').eq('cyberId', cyberId),
      supabase.from('Ticket').select('id,tempsRestant,codeUnique').eq('cyberId', cyberId),
    ]);

    const ticketMap = new Map(
      (ticketsRes.data ?? []).map((t) => [
        t.id as string,
        {
          tempsRestant: t.tempsRestant as number,
          codeUnique: t.codeUnique as string,
        },
      ]),
    );
    const presenceMap = new Map(
      (presenceRes.data ?? []).map((p) => [
        p.numeroPoste as number,
        { connected: p.connected as boolean },
      ]),
    );

    rebuild(sessionsRes.data ?? [], ticketMap, presenceMap);
  }, [cyberId, rebuild]);

  useEffect(() => {
    if (!cyberId) {
      setPostes([]);
      setConnected(false);
      return;
    }

    const supabase = createClient();
    let sessionsCache: Array<Record<string, unknown>> = [];
    let ticketsCache = new Map<string, { tempsRestant: number; codeUnique: string }>();
    let presenceCache = new Map<number, { connected: boolean }>();

    void loadInitial();

    const channel = supabase
      .channel(`postes-${cyberId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'SessionOrdinateur',
          filter: `cyberId=eq.${cyberId}`,
        },
        (payload) => {
          if (payload.eventType === 'DELETE' && payload.old) {
            sessionsCache = sessionsCache.filter(
              (s) => s.id !== (payload.old as { id: string }).id,
            );
          } else if (payload.new) {
            const row = payload.new as Record<string, unknown>;
            const idx = sessionsCache.findIndex((s) => s.id === row.id);
            if (idx >= 0) sessionsCache[idx] = row;
            else sessionsCache.push(row);
          }
          rebuild(
            sessionsCache as Parameters<typeof rebuild>[0],
            ticketsCache,
            presenceCache,
          );
        },
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'Ticket',
          filter: `cyberId=eq.${cyberId}`,
        },
        (payload) => {
          if (payload.new) {
            const row = payload.new as {
              id: string;
              tempsRestant: number;
              codeUnique: string;
            };
            ticketsCache.set(row.id, {
              tempsRestant: row.tempsRestant,
              codeUnique: row.codeUnique,
            });
          }
          rebuild(
            sessionsCache as Parameters<typeof rebuild>[0],
            ticketsCache,
            presenceCache,
          );
        },
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'PostePresence',
          filter: `cyberId=eq.${cyberId}`,
        },
        (payload) => {
          if (payload.new) {
            const row = payload.new as {
              numeroPoste: number;
              connected: boolean;
            };
            presenceCache.set(row.numeroPoste, {
              connected: row.connected,
            });
          }
          rebuild(
            sessionsCache as Parameters<typeof rebuild>[0],
            ticketsCache,
            presenceCache,
          );
        },
      )
      .subscribe((status) => {
        setConnected(status === 'SUBSCRIBED');
        if (status === 'SUBSCRIBED') {
          void loadInitial().then(() => {
            void supabase
              .from('SessionOrdinateur')
              .select('*')
              .eq('cyberId', cyberId)
              .then(({ data }) => {
                sessionsCache = data ?? [];
              });
          });
        }
      });

    return () => {
      void supabase.removeChannel(channel);
      setConnected(false);
    };
  }, [cyberId, loadInitial, rebuild]);

  return useMemo(() => ({ postes, connected }), [postes, connected]);
}
