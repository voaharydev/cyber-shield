'use client';

import { useCyber } from '@/lib/cyber-context';
import { useAuth } from '@/lib/auth';

export function CyberSwitcher() {
  const { isAdmin } = useAuth();
  const { cybers, activeCyberId, setActiveCyberId, loading } = useCyber();

  if (!isAdmin) {
    return null;
  }

  if (loading) {
    return (
      <span className="text-sm text-zinc-500">Chargement des cybers...</span>
    );
  }

  if (cybers.length === 0) {
    return (
      <span className="text-sm text-amber-400">Aucun établissement</span>
    );
  }

  return (
    <label className="flex items-center gap-2 text-sm text-zinc-400">
      <span>Établissement</span>
      <select
        value={activeCyberId ?? ''}
        onChange={(e) => setActiveCyberId(e.target.value)}
        className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-white focus:border-emerald-500 focus:outline-none"
      >
        {cybers.map((cyber) => (
          <option key={cyber.id} value={cyber.id}>
            {cyber.nom}
          </option>
        ))}
      </select>
    </label>
  );
}
