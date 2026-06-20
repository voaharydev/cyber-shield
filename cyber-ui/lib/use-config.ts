'use client';

import { useCallback, useEffect, useState } from 'react';
import { fetchConfigAction } from '@/app/actions/config';
import { useCyber } from '@/lib/cyber-context';
import { useAuth } from '@/lib/auth';

export interface AppConfig {
  id: string;
  nom: string;
  nombrePostes: number;
  dureesTicket: number[];
  prixParMinute: number;
}

const DEFAULT_CONFIG: AppConfig = {
  id: '',
  nom: 'CyberControl',
  nombrePostes: 12,
  dureesTicket: [30, 60, 90, 120],
  prixParMinute: 100,
};

export function useConfig() {
  const { user } = useAuth();
  const { activeCyberId } = useCyber();
  const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!user || !activeCyberId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await fetchConfigAction(activeCyberId);
      setConfig(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de chargement');
    } finally {
      setLoading(false);
    }
  }, [user, activeCyberId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { config, loading, error, refresh, setConfig };
}
