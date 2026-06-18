'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CyberSummary, fetchCybers } from '@/lib/api';
import { useAuth } from '@/lib/auth';

const CYBER_KEY = 'cyber_active_id';

interface CyberContextValue {
  activeCyberId: string | null;
  activeCyber: CyberSummary | null;
  cybers: CyberSummary[];
  loading: boolean;
  setActiveCyberId: (id: string) => void;
  refreshCybers: () => Promise<void>;
}

const CyberContext = createContext<CyberContextValue | null>(null);

export function CyberProvider({ children }: { children: React.ReactNode }) {
  const { user, token, isAdmin } = useAuth();
  const [cybers, setCybers] = useState<CyberSummary[]>([]);
  const [activeCyberId, setActiveCyberIdState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshCybers = useCallback(async () => {
    if (!token) {
      setCybers([]);
      setActiveCyberIdState(null);
      setLoading(false);
      return;
    }

    if (isAdmin) {
      const { cybers: list } = await fetchCybers(token);
      setCybers(list);

      const stored = localStorage.getItem(CYBER_KEY);
      const validStored = list.find((c) => c.id === stored);
      const nextId = validStored?.id ?? list[0]?.id ?? null;
      setActiveCyberIdState(nextId);
      if (nextId) {
        localStorage.setItem(CYBER_KEY, nextId);
      }
    } else if (user?.cyberId) {
      setActiveCyberIdState(user.cyberId);
      localStorage.setItem(CYBER_KEY, user.cyberId);
      setCybers([]);
    } else {
      setActiveCyberIdState(null);
      setCybers([]);
    }

    setLoading(false);
  }, [token, isAdmin, user?.cyberId]);

  useEffect(() => {
    setLoading(true);
    void refreshCybers().catch(() => setLoading(false));
  }, [refreshCybers]);

  const setActiveCyberId = useCallback(
    (id: string) => {
      if (!isAdmin) return;
      setActiveCyberIdState(id);
      localStorage.setItem(CYBER_KEY, id);
    },
    [isAdmin],
  );

  const activeCyber = useMemo(
    () => cybers.find((c) => c.id === activeCyberId) ?? null,
    [cybers, activeCyberId],
  );

  const value = useMemo(
    () => ({
      activeCyberId,
      activeCyber,
      cybers,
      loading,
      setActiveCyberId,
      refreshCybers,
    }),
    [
      activeCyberId,
      activeCyber,
      cybers,
      loading,
      setActiveCyberId,
      refreshCybers,
    ],
  );

  return (
    <CyberContext.Provider value={value}>{children}</CyberContext.Provider>
  );
}

export function useCyber() {
  const ctx = useContext(CyberContext);
  if (!ctx) {
    throw new Error('useCyber must be used within CyberProvider');
  }
  return ctx;
}

export function getActiveCyberId(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CYBER_KEY);
}
