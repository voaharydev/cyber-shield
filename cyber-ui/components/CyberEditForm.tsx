'use client';

import { useState } from 'react';
import { CyberSummary, updateCyber, UpdateCyberRequest } from '@/lib/api';
import { useCyber } from '@/lib/cyber-context';

interface CyberEditFormProps {
  cyber: CyberSummary;
  onSaved: () => void;
  onCancel: () => void;
}

export function CyberEditForm({ cyber, onSaved, onCancel }: CyberEditFormProps) {
  const { refreshCybers } = useCyber();
  const [nom, setNom] = useState(cyber.nom);
  const [nombrePostes, setNombrePostes] = useState(cyber.nombrePostes);
  const [prixParMinuteInput, setPrixParMinuteInput] = useState(
    String(cyber.prixParMinute),
  );
  const [durees, setDurees] = useState<number[]>(cyber.dureesTicket);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const prixParMinute = parseFloat(prixParMinuteInput);
    if (!Number.isFinite(prixParMinute) || prixParMinute < 0.01) {
      setError('Prix par minute invalide');
      return;
    }

    const dto: UpdateCyberRequest = {
      nom: nom.trim(),
      nombrePostes,
      dureesTicket: [...durees].sort((a, b) => a - b),
      prixParMinute,
    };

    setLoading(true);
    try {
      await updateCyber(cyber.id, dto);
      await refreshCybers();
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de mise à jour');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="edit-cyber-nom" className="mb-1 block text-sm text-zinc-400">
          Nom de l&apos;établissement
        </label>
        <input
          id="edit-cyber-nom"
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
            htmlFor="edit-cyber-postes"
            className="mb-1 block text-sm text-zinc-400"
          >
            Nombre de postes
          </label>
          <input
            id="edit-cyber-postes"
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
            htmlFor="edit-cyber-prix"
            className="mb-1 block text-sm text-zinc-400"
          >
            Prix par minute (Ar)
          </label>
          <input
            id="edit-cyber-prix"
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

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-lg bg-emerald-600 py-2 font-medium text-white hover:bg-emerald-500 disabled:opacity-50"
        >
          {loading ? 'Enregistrement...' : 'Enregistrer'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-zinc-600 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}
