'use client';

import { useEffect, useState } from 'react';
import { AppConfig, updateConfig } from '@/lib/api';

interface ConfigFormProps {
  initialConfig: AppConfig;
  onSaved: (config: AppConfig) => void;
}

export function ConfigForm({ initialConfig, onSaved }: ConfigFormProps) {
  const [nom, setNom] = useState(initialConfig.nom);
  const [nombrePostes, setNombrePostes] = useState(initialConfig.nombrePostes);
  const [prixParMinuteInput, setPrixParMinuteInput] = useState(
    String(initialConfig.prixParMinute),
  );
  const [durees, setDurees] = useState<number[]>(initialConfig.dureesTicket);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setNom(initialConfig.nom);
    setNombrePostes(initialConfig.nombrePostes);
    setPrixParMinuteInput(String(initialConfig.prixParMinute));
    setDurees(initialConfig.dureesTicket);
  }, [initialConfig]);

  function updateDuree(index: number, value: number) {
    setDurees((prev) => prev.map((d, i) => (i === index ? value : d)));
  }

  function addDuree() {
    if (durees.length >= 10) return;
    setDurees((prev) => [...prev, 60]);
  }

  function removeDuree(index: number) {
    if (durees.length <= 1) return;
    setDurees((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const prixParMinute = parseFloat(prixParMinuteInput);
      if (!Number.isFinite(prixParMinute) || prixParMinute < 0.01) {
        throw new Error('Le prix par minute doit être au moins 0,01 Ar');
      }
      const sortedDurees = [...durees].sort((a, b) => a - b);
      const result = await updateConfig({
        nom: nom.trim(),
        nombrePostes,
        prixParMinute,
        dureesTicket: sortedDurees,
      });
      onSaved(result);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de sauvegarde');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="nom"
          className="mb-1 block text-sm font-medium text-zinc-400"
        >
          Nom de l&apos;établissement
        </label>
        <input
          id="nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          maxLength={80}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="postes"
          className="mb-1 block text-sm font-medium text-zinc-400"
        >
          Nombre de postes PC
        </label>
        <input
          id="postes"
          type="number"
          min={1}
          max={64}
          value={nombrePostes}
          onChange={(e) => setNombrePostes(Number(e.target.value))}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
        />
        <p className="mt-1 text-xs text-zinc-500">
          Réduire le nombre est impossible si un poste supérieur est en cours
          d&apos;utilisation.
        </p>
      </div>

      <div>
        <label
          htmlFor="prixParMinute"
          className="mb-1 block text-sm font-medium text-zinc-400"
        >
          Prix par minute (Ar)
        </label>
        <input
          id="prixParMinute"
          type="number"
          min={0.01}
          step={0.01}
          inputMode="decimal"
          value={prixParMinuteInput}
          onChange={(e) => setPrixParMinuteInput(e.target.value)}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
        />
        <p className="mt-1 text-xs text-zinc-500">
          Le montant des tickets est calculé automatiquement : durée × prix/min.
        </p>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-400">
            Durées de ticket proposées (minutes)
          </span>
          <button
            type="button"
            onClick={addDuree}
            disabled={durees.length >= 10}
            className="text-xs text-emerald-400 underline hover:text-emerald-300 disabled:opacity-50"
          >
            Ajouter
          </button>
        </div>
        <div className="space-y-2">
          {durees.map((duree, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="number"
                min={5}
                max={480}
                value={duree}
                onChange={(e) => updateDuree(index, Number(e.target.value))}
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => removeDuree(index)}
                disabled={durees.length <= 1}
                className="rounded-lg border border-zinc-700 px-3 text-sm text-zinc-400 hover:bg-zinc-800 disabled:opacity-50"
              >
                Suppr.
              </button>
            </div>
          ))}
        </div>
      </div>

      {error && (
        <p className="rounded-lg bg-red-950/50 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      {success && (
        <p className="rounded-lg bg-emerald-950/50 px-3 py-2 text-sm text-emerald-400">
          Configuration enregistrée.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-emerald-600 py-3 font-medium text-white transition hover:bg-emerald-500 disabled:opacity-50"
      >
        {loading ? 'Enregistrement...' : 'Enregistrer'}
      </button>
    </form>
  );
}
