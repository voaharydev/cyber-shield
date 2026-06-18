'use client';

import { getPosteColor, PosteState } from '@/lib/websocket';

const colorClasses = {
  green: {
    border: 'border-emerald-500/60',
    bg: 'bg-emerald-950/40',
    dot: 'bg-emerald-400',
    label: 'En cours',
  },
  yellow: {
    border: 'border-amber-500/60',
    bg: 'bg-amber-950/40',
    dot: 'bg-amber-400',
    label: 'Prêt',
  },
  red: {
    border: 'border-red-500/60',
    bg: 'bg-red-950/40',
    dot: 'bg-red-400',
    label: 'Hors ligne',
  },
};

function PosteCard({ poste }: { poste: PosteState }) {
  const color = getPosteColor(poste);
  const styles = colorClasses[color];

  return (
    <div
      className={`rounded-xl border-2 p-4 transition-colors ${styles.border} ${styles.bg}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-semibold">PC {poste.numeroPoste}</span>
        <span className={`h-3 w-3 rounded-full ${styles.dot}`} />
      </div>
      <p className="text-sm text-zinc-400">{styles.label}</p>
      {poste.statut === 'EN_COURS' && poste.tempsRestant !== null && (
        <p className="mt-2 text-2xl font-mono font-bold text-emerald-300">
          {poste.tempsRestant} min
        </p>
      )}
      {poste.ticketCode && (
        <p className="mt-1 truncate font-mono text-xs text-zinc-500">
          {poste.ticketCode}
        </p>
      )}
    </div>
  );
}

function SkeletonCard({ index }: { index: number }) {
  return (
    <div className="animate-pulse rounded-xl border-2 border-zinc-800 bg-zinc-900/50 p-4">
      <div className="mb-3 h-6 w-16 rounded bg-zinc-800" />
      <div className="h-4 w-24 rounded bg-zinc-800" />
      <span className="sr-only">Chargement poste {index}</span>
    </div>
  );
}

interface PcGridProps {
  postes: PosteState[];
  skeletonCount?: number;
}

export function PcGrid({ postes, skeletonCount = 12 }: PcGridProps) {
  if (postes.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: skeletonCount }, (_, i) => (
          <SkeletonCard key={i} index={i + 1} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {postes.map((poste) => (
        <PosteCard key={poste.numeroPoste} poste={poste} />
      ))}
    </div>
  );
}
