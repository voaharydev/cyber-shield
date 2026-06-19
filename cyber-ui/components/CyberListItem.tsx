'use client';

import { useState } from 'react';
import {
  archiveCyber,
  CyberSummary,
  deactivateCyber,
  duplicateCyber,
  reactivateCyber,
} from '@/lib/api';
import { useCyber } from '@/lib/cyber-context';
import { CyberEditForm } from '@/components/CyberEditForm';

interface CyberListItemProps {
  cyber: CyberSummary;
  onChanged: () => void;
}

function isOperational(cyber: CyberSummary): boolean {
  return cyber.isActive && !cyber.archivedAt;
}

export function CyberListItem({ cyber, onChanged }: CyberListItemProps) {
  const { refreshCybers } = useCyber();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runAction(action: () => Promise<unknown>) {
    setLoading(true);
    setError(null);
    try {
      await action();
      await refreshCybers();
      onChanged();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur');
    } finally {
      setLoading(false);
    }
  }

  function handleDeactivate() {
    if (
      !window.confirm(
        `Désactiver « ${cyber.nom} » ? Les opérations caisse et WebSocket seront bloquées.`,
      )
    ) {
      return;
    }
    void runAction(() => deactivateCyber(cyber.id));
  }

  function handleArchive() {
    if (
      !window.confirm(
        `Archiver « ${cyber.nom} » ? L'établissement sera masqué des listes actives.`,
      )
    ) {
      return;
    }
    void runAction(() => archiveCyber(cyber.id));
  }

  function handleReactivate() {
    if (!window.confirm(`Réactiver « ${cyber.nom} » ?`)) {
      return;
    }
    void runAction(() => reactivateCyber(cyber.id));
  }

  function handleDuplicate() {
    void runAction(() => duplicateCyber(cyber.id));
  }

  if (editing) {
    return (
      <li className="rounded-lg border border-emerald-500/40 bg-zinc-950/50 px-4 py-4">
        <CyberEditForm
          cyber={cyber}
          onSaved={() => {
            setEditing(false);
            onChanged();
          }}
          onCancel={() => setEditing(false)}
        />
      </li>
    );
  }

  return (
    <li className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-medium text-zinc-200">{cyber.nom}</p>
          <p className="mt-1 font-mono text-xs text-zinc-500">{cyber.id}</p>
          <p className="mt-1 text-sm text-zinc-400">
            {cyber.nombrePostes} postes — {cyber.prixParMinute} Ar/min
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Durées : {cyber.dureesTicket.join(', ')} min
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {cyber.archivedAt && (
            <span className="rounded bg-zinc-700 px-2 py-0.5 text-xs text-zinc-300">
              Archivé
            </span>
          )}
          {!cyber.isActive && !cyber.archivedAt && (
            <span className="rounded bg-amber-900/50 px-2 py-0.5 text-xs text-amber-300">
              Désactivé
            </span>
          )}
          {isOperational(cyber) && (
            <span className="rounded bg-emerald-900/40 px-2 py-0.5 text-xs text-emerald-300">
              Actif
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {isOperational(cyber) && (
          <>
            <button
              type="button"
              disabled={loading}
              onClick={() => setEditing(true)}
              className="rounded-lg border border-zinc-600 px-3 py-1.5 text-xs text-zinc-200 hover:bg-zinc-800 disabled:opacity-50"
            >
              Modifier
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={handleDeactivate}
              className="rounded-lg border border-amber-700/60 px-3 py-1.5 text-xs text-amber-300 hover:bg-amber-950/40 disabled:opacity-50"
            >
              Désactiver
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={handleArchive}
              className="rounded-lg border border-zinc-600 px-3 py-1.5 text-xs text-zinc-300 hover:bg-zinc-800 disabled:opacity-50"
            >
              Archiver
            </button>
          </>
        )}
        {!isOperational(cyber) && (
          <button
            type="button"
            disabled={loading}
            onClick={handleReactivate}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-xs text-white hover:bg-emerald-600 disabled:opacity-50"
          >
            Réactiver
          </button>
        )}
        {!cyber.archivedAt && (
          <button
            type="button"
            disabled={loading}
            onClick={handleDuplicate}
            className="rounded-lg border border-zinc-600 px-3 py-1.5 text-xs text-zinc-300 hover:bg-zinc-800 disabled:opacity-50"
          >
            Dupliquer
          </button>
        )}
      </div>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </li>
  );
}
