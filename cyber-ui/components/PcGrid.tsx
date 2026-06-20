'use client';

import { useState } from 'react';
import { TypePaiement } from '@/lib/api';
import {
  encaisserPostpaidSessionAction,
  resetPosteAction,
  startPostpaidSessionAction,
  stopPostpaidSessionAction,
} from '@/app/actions/sessions';
import { getPosteColor, PosteColor, PosteState } from '@/lib/websocket';

const colorClasses: Record<
  PosteColor,
  { border: string; bg: string; dot: string; label: string }
> = {
  green: {
    border: 'border-emerald-500/60',
    bg: 'bg-emerald-950/40',
    dot: 'bg-emerald-400',
    label: 'Prépayé en cours',
  },
  blue: {
    border: 'border-blue-500/60',
    bg: 'bg-blue-950/40',
    dot: 'bg-blue-400',
    label: 'Session libre',
  },
  orange: {
    border: 'border-orange-500/80',
    bg: 'bg-orange-950/50',
    dot: 'bg-orange-400',
    label: 'À payer',
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

const PAIEMENTS: { value: TypePaiement; label: string }[] = [
  { value: 'ESPECES', label: 'Espèces' },
  { value: 'MOBILE_MONEY', label: 'Mobile Money' },
  { value: 'CARTE', label: 'Carte' },
];

function formatAr(amount: number): string {
  return `${amount.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} Ar`;
}

function getResetConfig(
  poste: PosteState,
): { label: string; message: string } | null {
  if (poste.statut === 'A_PAYER') {
    return null;
  }

  if (poste.statut === 'EN_COURS' && poste.typeSession === 'PREPAID') {
    const ticket = poste.ticketCode ? ` (${poste.ticketCode})` : '';
    return {
      label: 'Réinitialiser le poste',
      message: `Réinitialiser PC ${poste.numeroPoste} ? Le ticket${ticket} sera remis en VALIDE avec les minutes restantes.`,
    };
  }

  if (poste.statut === 'VERROUILLE' && poste.connected) {
    return {
      label: 'Réinitialiser la connexion',
      message: `Couper la connexion WebSocket du PC ${poste.numeroPoste} ?`,
    };
  }

  if (
    poste.statut === 'EN_COURS' &&
    poste.typeSession === 'POSTPAID' &&
    !poste.connected
  ) {
    return {
      label: 'Réinitialiser',
      message: `Arrêter la session libre du PC ${poste.numeroPoste} (hors ligne) et passer en attente de paiement ?`,
    };
  }

  return null;
}

interface PosteCardProps {
  poste: PosteState;
  cyberId: string;
}

function PosteCard({ poste, cyberId }: PosteCardProps) {
  const color = getPosteColor(poste);
  const styles = colorClasses[color];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [typePaiement, setTypePaiement] = useState<TypePaiement>('ESPECES');

  const pulse = poste.statut === 'A_PAYER';
  const resetConfig = getResetConfig(poste);

  async function runAction(action: () => Promise<unknown>) {
    setLoading(true);
    setError(null);
    try {
      await action();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur');
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    if (!resetConfig) return;
    if (!window.confirm(resetConfig.message)) return;
    void runAction(() => resetPosteAction(cyberId, poste.numeroPoste));
  }

  return (
    <div
      className={`rounded-xl border-2 p-4 transition-colors ${styles.border} ${styles.bg} ${pulse ? 'animate-pulse' : ''}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-semibold">PC {poste.numeroPoste}</span>
        <span className={`h-3 w-3 rounded-full ${styles.dot}`} />
      </div>

      {poste.statut === 'EN_COURS' && poste.typeSession === 'POSTPAID' && (
        <span className="mb-2 inline-block rounded bg-blue-600/30 px-2 py-0.5 text-xs font-medium text-blue-300">
          Session Libre
        </span>
      )}

      <p className="text-sm text-zinc-400">{styles.label}</p>

      {poste.statut === 'EN_COURS' &&
        poste.typeSession === 'PREPAID' &&
        poste.tempsRestant !== null && (
          <p className="mt-2 text-2xl font-mono font-bold text-emerald-300">
            {poste.tempsRestant} min
          </p>
        )}

      {poste.statut === 'EN_COURS' &&
        poste.typeSession === 'POSTPAID' && (
          <>
            <p className="mt-2 text-2xl font-mono font-bold text-blue-300">
              {poste.tempsEcouleMinutes ?? 0} min
            </p>
            {poste.montantEstime != null && (
              <p className="mt-1 text-sm text-blue-200/80">
                ~{formatAr(poste.montantEstime)}
              </p>
            )}
          </>
        )}

      {poste.statut === 'A_PAYER' && poste.montantDu != null && (
        <p className="mt-2 text-3xl font-bold text-orange-300">
          {formatAr(poste.montantDu)}
        </p>
      )}

      {poste.ticketCode && poste.typeSession === 'PREPAID' && (
        <p className="mt-1 truncate font-mono text-xs text-zinc-500">
          {poste.ticketCode}
        </p>
      )}

      <div className="mt-3 space-y-2">
        {poste.statut === 'VERROUILLE' && poste.connected && (
          <button
            type="button"
            disabled={loading}
            onClick={() =>
              void runAction(() =>
                startPostpaidSessionAction(cyberId, poste.numeroPoste),
              )
            }
            className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-50"
          >
            Session libre
          </button>
        )}

        {poste.statut === 'EN_COURS' && poste.typeSession === 'POSTPAID' && (
          <button
            type="button"
            disabled={loading}
            onClick={() =>
              void runAction(() =>
                stopPostpaidSessionAction(cyberId, poste.numeroPoste),
              )
            }
            className="w-full rounded-lg bg-zinc-700 py-2 text-sm text-zinc-200 hover:bg-zinc-600 disabled:opacity-50"
          >
            Arrêter
          </button>
        )}

        {poste.statut === 'A_PAYER' && (
          <>
            <select
              value={typePaiement}
              onChange={(e) =>
                setTypePaiement(e.target.value as TypePaiement)
              }
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
            >
              {PAIEMENTS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              disabled={loading}
              onClick={() =>
                void runAction(() =>
                  encaisserPostpaidSessionAction(
                    cyberId,
                    poste.numeroPoste,
                    typePaiement,
                  ),
                )
              }
              className="w-full rounded-lg bg-orange-600 py-2 text-sm font-medium text-white hover:bg-orange-500 disabled:opacity-50"
            >
              Encaisser & Libérer le poste
            </button>
          </>
        )}

        {resetConfig && (
          <button
            type="button"
            disabled={loading}
            onClick={handleReset}
            className="w-full rounded-lg border border-zinc-600 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/50 disabled:opacity-50"
          >
            {resetConfig.label}
          </button>
        )}
      </div>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
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
  cyberId: string;
}

export function PcGrid({ postes, skeletonCount = 12, cyberId }: PcGridProps) {
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
        <PosteCard key={poste.numeroPoste} poste={poste} cyberId={cyberId} />
      ))}
    </div>
  );
}
