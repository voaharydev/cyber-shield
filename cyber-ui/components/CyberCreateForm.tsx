'use client';

import { useState } from 'react';
import { createCyber } from '@/lib/api';
import { useCyber } from '@/lib/cyber-context';

export function CyberCreateForm({ onCreated }: { onCreated?: () => void }) {
  const { refreshCybers, setActiveCyberId } = useCyber();
  const [nom, setNom] = useState('');
  const [nombrePostes, setNombrePostes] = useState(8);
  const [prixParMinuteInput, setPrixParMinuteInput] = useState('100');
  const [durees, setDurees] = useState<number[]>([30, 60, 90, 120]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const prixParMinute = parseFloat(prixParMinuteInput);
    if (!Number.isFinite(prixParMinute) || prixParMinute < 0.01) {
      setError('Prix par minute invalide');
      return;
    }

    setLoading(true);
    try {
      const cyber = await createCyber({
        nom: nom.trim(),
        nombrePostes,
        dureesTicket: [...durees].sort((a, b) => a - b),
        prixParMinute,
      });
      await refreshCybers();
      setActiveCyberId(cyber.id);
      onCreated?.();
      setSuccess(true);
      setNom('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de création');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cyber-nom" className="mb-1 block text-sm text-zinc-400">
          Nom de l&apos;établissement
        </label>
        <input
          id="cyber-nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          maxLength={80}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cyber-postes"
            className="mb-1 block text-sm text-zinc-400"
          >
            Nombre de postes
          </label>
          <input
            id="cyber-postes"
            type="number"
            min={1}
            max={64}
            value={nombrePostes}
            onChange={(e) => setNombrePostes(Number(e.target.value))}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="cyber-prix"
            className="mb-1 block text-sm text-zinc-400"
          >
            Prix par minute (Ar)
          </label>
          <input
            id="cyber-prix"
            type="number"
            min={0.01}
            step={0.01}
            value={prixParMinuteInput}
            onChange={(e) => setPrixParMinuteInput(e.target.value)}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <span className="mb-2 block text-sm text-zinc-400">
          Durées de ticket (minutes, séparées par des virgules)
        </span>
        <input
          type="text"
          value={durees.join(', ')}
          onChange={(e) => {
            const parsed = e.target.value
              .split(',')
              .map((s) => parseInt(s.trim(), 10))
              .filter((n) => !Number.isNaN(n) && n >= 5);
            if (parsed.length > 0) setDurees(parsed);
          }}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
        />
      </div>

      {error && (
        <p className="rounded-lg bg-red-950/50 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}
      {success && (
        <p className="rounded-lg bg-emerald-950/50 px-3 py-2 text-sm text-emerald-400">
          Cyber créé avec succès.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-emerald-600 py-3 font-medium text-white transition hover:bg-emerald-500 disabled:opacity-50"
      >
        {loading ? 'Création...' : 'Créer le cyber'}
      </button>
    </form>
  );
}
