'use client';

import { useMemo, useState } from 'react';
import type {
  PcEventLog,
  PcLockState,
  PcSessionType,
} from '@/lib/pc-websocket';

interface PosteSimulatorViewProps {
  numeroPoste: number;
  connected: boolean;
  connectionError: string | null;
  lockState: PcLockState;
  typeSession: PcSessionType;
  tempsRestant: number | null;
  tempsEcoule: number | null;
  montantEstime: number | null;
  events: PcEventLog[];
  onUnlock: (code: string) => void;
  onPostpaidStart: () => void;
  onStopPostpaid: () => void;
}

function getLastErrorMessage(events: PcEventLog[]): string | null {
  for (const entry of events) {
    const event = entry.payload.event as string | undefined;
    if (event === 'unlock_rejected' || event === 'error') {
      const message = entry.payload.message;
      if (typeof message === 'string' && message.trim()) {
        return message;
      }
      if (event === 'unlock_rejected') {
        return 'Code ticket invalide ou refusé';
      }
      return 'Erreur de connexion';
    }
  }
  return null;
}

export function PosteSimulatorView({
  numeroPoste,
  connected,
  connectionError,
  lockState,
  typeSession,
  tempsRestant,
  tempsEcoule,
  montantEstime,
  events,
  onUnlock,
  onPostpaidStart,
  onStopPostpaid,
}: PosteSimulatorViewProps) {
  const [code, setCode] = useState('');
  const statusMessage = useMemo(() => getLastErrorMessage(events), [events]);

  const isLocked = lockState === 'VERROUILLE';
  const isPrepaid =
    lockState === 'DEVERROUILLE' && typeSession === 'PREPAID';
  const isPostpaid =
    lockState === 'DEVERROUILLE' && typeSession === 'POSTPAID';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim() || !connected) return;
    onUnlock(code);
  }

  return (
    <div className="overflow-hidden rounded-xl border-2 border-zinc-700 bg-zinc-900 shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-2">
        <span className="font-mono text-xs text-zinc-500">PC {numeroPoste}</span>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>
      </div>

      <div
        className="relative aspect-video w-full"
        style={{ backgroundColor: '#0A0A0B' }}
      >
        {isLocked && (
          <div className="flex h-full flex-col items-center justify-center px-6">
            <span className="text-6xl" aria-hidden>
              🔒
            </span>
            <h2 className="mt-6 text-3xl font-bold text-[#FAFAFA]">
              PC VERROUILLÉ
            </h2>
            <p className="mt-3 text-center text-lg text-[#A1A1AA]">
              Code ticket ou session libre (paiement à la fin)
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="TCK-XXXXX"
                maxLength={9}
                disabled={!connected}
                className="h-10 w-52 rounded border border-[#3F3F46] bg-[#18181B] px-3 font-mono text-base text-[#FAFAFA] focus:border-emerald-500 focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!connected || !code.trim()}
                className="h-10 rounded bg-emerald-600 px-5 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Déverrouiller
              </button>
            </form>

            <button
              type="button"
              onClick={onPostpaidStart}
              disabled={!connected}
              className="mt-4 h-10 w-56 rounded bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Session libre
            </button>

            {(statusMessage || connectionError) && (
              <p className="mt-4 text-center text-sm text-red-400">
                {statusMessage ?? connectionError}
              </p>
            )}
          </div>
        )}

        {isPrepaid && tempsRestant !== null && (
          <div className="flex h-full flex-col items-center justify-center">
            <p className="text-sm text-[#A1A1AA]">Session prépayée active</p>
            <p className="mt-4 font-mono text-3xl text-emerald-400">
              {tempsRestant} min restantes
            </p>
          </div>
        )}

        {isPrepaid && tempsRestant === null && (
          <div className="flex h-full flex-col items-center justify-center">
            <p className="text-sm text-[#A1A1AA]">Session prépayée active</p>
            <p className="mt-4 font-mono text-2xl text-emerald-400">
              En attente du chrono…
            </p>
          </div>
        )}

        {isPostpaid && (
          <>
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-sm text-[#A1A1AA]">Session libre en cours</p>
              <p className="mt-2 text-lg text-blue-400">
                Utilisez le poste librement
              </p>
            </div>

            <div className="absolute bottom-4 right-4 rounded-lg border-2 border-blue-600 bg-[#18181B] p-4">
              <p className="font-mono text-base text-blue-400">
                Session libre — {tempsEcoule ?? 0} min
              </p>
              <p className="mt-1 text-sm text-[#A1A1AA]">
                {montantEstime ?? 0} Ar
              </p>
              <button
                type="button"
                onClick={onStopPostpaid}
                disabled={!connected}
                className="mt-3 h-9 w-full rounded bg-red-600 text-sm font-medium text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Terminer la session
              </button>
            </div>
          </>
        )}

        {lockState === 'DEVERROUILLE' && !typeSession && (
          <div className="flex h-full flex-col items-center justify-center">
            <p className="text-lg text-emerald-400">Poste déverrouillé</p>
          </div>
        )}

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <p className="text-xs text-[#71717A]">
            {connected
              ? 'Connecté au serveur'
              : 'Connexion au serveur...'}
          </p>
        </div>
      </div>
    </div>
  );
}
