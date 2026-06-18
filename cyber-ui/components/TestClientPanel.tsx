'use client';

import { useEffect, useState } from 'react';
import { usePcTestSocket } from '@/lib/pc-websocket';
import { useConfig } from '@/lib/use-config';

import { useCyber } from '@/lib/cyber-context';

export function TestClientPanel() {
  const { activeCyberId } = useCyber();
  const { config } = useConfig();
  const postes = Array.from(
    { length: config.nombrePostes },
    (_, i) => i + 1,
  );
  const [numeroPoste, setNumeroPoste] = useState(1);
  const [code, setCode] = useState('');
  const {
    connected,
    connectionError,
    wsUrl,
    lockState,
    tempsRestant,
    events,
    tryUnlock,
    reconnect,
    clearEvents,
  } = usePcTestSocket(activeCyberId, numeroPoste);

  useEffect(() => {
    if (numeroPoste > config.nombrePostes) {
      setNumeroPoste(1);
    }
  }, [config.nombrePostes, numeroPoste]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    tryUnlock(code);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <div>
          <label htmlFor="poste" className="mb-1 block text-sm text-zinc-400">
            Numéro de poste
          </label>
          <select
            id="poste"
            value={numeroPoste}
            onChange={(e) => setNumeroPoste(Number(e.target.value))}
            className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
          >
            {postes.map((p) => (
              <option key={p} value={p}>
                PC {p}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end gap-3">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              connected ? 'bg-emerald-400' : 'bg-red-500'
            }`}
          />
          <span className="text-sm text-zinc-400">
            {connected ? 'Connecté' : 'Déconnecté'}
          </span>
          {!connected && (
            <button
              type="button"
              onClick={reconnect}
              className="text-xs text-emerald-400 underline hover:text-emerald-300"
            >
              Reconnecter
            </button>
          )}
        </div>
      </div>

      <div
        className={`rounded-xl border-2 p-6 text-center ${
          lockState === 'VERROUILLE'
            ? 'border-red-500/50 bg-red-950/30'
            : 'border-emerald-500/50 bg-emerald-950/30'
        }`}
      >
        <p className="text-sm text-zinc-400">État simulé</p>
        <p className="mt-1 text-3xl font-bold">
          {lockState === 'VERROUILLE' ? 'VERROUILLÉ' : 'DÉVERROUILLÉ'}
        </p>
        {tempsRestant !== null && lockState === 'DEVERROUILLE' && (
          <p className="mt-2 font-mono text-xl text-emerald-300">
            {tempsRestant} min restantes
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="TCK-XXXXX"
          maxLength={9}
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 font-mono text-white focus:border-emerald-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!code.trim()}
          className="rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Déverrouiller
        </button>
      </form>

      <div className="space-y-1 text-xs text-zinc-500">
        <p>
          WebSocket : <span className="font-mono text-zinc-400">{wsUrl}</span>
        </p>
        {connectionError && (
          <p className="text-red-400">{connectionError}</p>
        )}
        {!connected && (
          <p>Vérifiez que cyber-server tourne sur le port 5001.</p>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium text-zinc-400">
            Journal d&apos;événements
          </h3>
          {events.length > 0 && (
            <button
              type="button"
              onClick={clearEvents}
              className="text-xs text-zinc-500 underline hover:text-zinc-300"
            >
              Effacer
            </button>
          )}
        </div>
        <div className="max-h-64 overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-950 p-3 font-mono text-xs">
          {events.length === 0 ? (
            <p className="text-zinc-600">Aucun événement reçu</p>
          ) : (
            <ul className="space-y-2">
              {events.map((entry) => (
                <li key={entry.id} className="border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">
                    {entry.timestamp.toLocaleTimeString('fr-FR')}
                  </span>{' '}
                  <span
                    className={
                      entry.payload.event === 'unlock_success'
                        ? 'text-emerald-400'
                        : entry.payload.event === 'unlock_rejected'
                          ? 'text-red-400'
                          : entry.payload.event === 'time_update'
                            ? 'text-amber-400'
                            : 'text-zinc-300'
                    }
                  >
                    {String(entry.payload.event ?? 'message')}
                  </span>
                  <pre className="mt-1 whitespace-pre-wrap break-all text-zinc-500">
                    {JSON.stringify(entry.payload)}
                  </pre>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
