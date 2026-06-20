'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { fetchCybersAction } from '@/app/actions/config';
import { useAuth } from '@/lib/auth';

const CYBER_KEY = 'cyber_active_id';

interface CyberContextValue {
  activeCyberId: string | null;
  activeCyber: { id: string; nom: string } | null;
  cybers: { id: string; nom: string }[];
  loading: boolean;
  setActiveCyberId: (id: string) => void;
  refreshCybers: () => Promise<void>;
  canSwitchCyber: boolean;
}

const CyberContext = createContext<CyberContextValue | null>(null);

function pickActiveId(
  cyberIds: string[],
  stored: string | null,
): string | null {
  if (cyberIds.length === 0) return null;
  if (stored && cyberIds.includes(stored)) return stored;
  return cyberIds[0];
}

export function CyberProvider({ children }: { children: React.ReactNode }) {
  const { user, isAdmin } = useAuth();
  const [cybers, setCybers] = useState<{ id: string; nom: string }[]>([]);
  const [activeCyberId, setActiveCyberIdState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const canSwitchCyber =
    isAdmin || (user?.cyberIds.length ?? 0) > 1;

  const refreshCybers = useCallback(async () => {
    if (!user) {
      setCybers([]);
      setActiveCyberIdState(null);
      setLoading(false);
      return;
    }

    if (isAdmin) {
      const { cybers: list } = await fetchCybersAction();
      const summaries = list.map((c) => ({ id: c.id, nom: c.nom }));
      setCybers(summaries);

      const stored = localStorage.getItem(CYBER_KEY);
      const nextId = pickActiveId(
        summaries.map((c) => c.id),
        stored,
      );
      setActiveCyberIdState(nextId);
      if (nextId) {
        localStorage.setItem(CYBER_KEY, nextId);
      }
    } else {
      const staffCybers = user.cybers;
      setCybers(staffCybers);

      const stored = localStorage.getItem(CYBER_KEY);
      const nextId = pickActiveId(user.cyberIds, stored);
      setActiveCyberIdState(nextId);
      if (nextId) {
        localStorage.setItem(CYBER_KEY, nextId);
      }
    }

    setLoading(false);
  }, [isAdmin, user]);

  useEffect(() => {
    setLoading(true);
    void refreshCybers().catch(() => setLoading(false));
  }, [refreshCybers]);

  const setActiveCyberId = useCallback(
    (id: string) => {
      if (!canSwitchCyber) return;
      if (isAdmin || user?.cyberIds.includes(id)) {
        setActiveCyberIdState(id);
        localStorage.setItem(CYBER_KEY, id);
      }
    },
    [canSwitchCyber, user?.cyberIds, isAdmin],
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
      canSwitchCyber,
    }),
    [
      activeCyberId,
      activeCyber,
      cybers,
      loading,
      setActiveCyberId,
      refreshCybers,
      canSwitchCyber,
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
