'use client';

import { useEffect, useState } from 'react';
import {
  fetchFideliteConfig,
  FideliteConfig,
  updateFideliteConfig,
} from '@/lib/fidelite-api';

export function FideliteConfigForm() {
  const [config, setConfig] = useState<FideliteConfig | null>(null);
  const [pointsParMinuteAchat, setPointsParMinuteAchat] = useState(1);
  const [pointsPourMinuteGratuite, setPointsPourMinuteGratuite] = useState(10);
  const [pointsPour100Ar, setPointsPour100Ar] = useState(5);
  const [actif, setActif] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFideliteConfig();
        setConfig(data);
        setPointsParMinuteAchat(data.pointsParMinuteAchat);
        setPointsPourMinuteGratuite(data.pointsPourMinuteGratuite);
        setPointsPour100Ar(data.pointsPour100Ar);
        setActif(data.actif);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur de chargement');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      const updated = await updateFideliteConfig({
        pointsParMinuteAchat,
        pointsPourMinuteGratuite,
        pointsPour100Ar,
        actif,
      });
      setConfig(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de sauvegarde');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="text-zinc-500">Chargement...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-zinc-500">
        Règles valables dans tout le réseau d&apos;établissements.
      </p>

      <label className="flex items-center gap-3 text-sm text-zinc-300">
        <input
          type="checkbox"
          checked={actif}
          onChange={(e) => setActif(e.target.checked)}
          className="rounded"
        />
        Programme actif
      </label>

      <div>
        <label className="mb-1 block text-sm text-zinc-400">
          Points gagnés par minute achetée
        </label>
        <input
          type="number"
          min={1}
          value={pointsParMinuteAchat}
          onChange={(e) => setPointsParMinuteAchat(Number(e.target.value))}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-zinc-400">
          Points pour 1 minute gratuite
        </label>
        <input
          type="number"
          min={1}
          value={pointsPourMinuteGratuite}
          onChange={(e) => setPointsPourMinuteGratuite(Number(e.target.value))}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-zinc-400">
          Points pour 100 Ar de réduction
        </label>
        <input
          type="number"
          min={1}
          value={pointsPour100Ar}
          onChange={(e) => setPointsPour100Ar(Number(e.target.value))}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white"
        />
      </div>

      {config && (
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-500">
          Exemple : achat 60 min → +{60 * pointsParMinuteAchat} pts ·{' '}
          {pointsPourMinuteGratuite * 5} pts = 5 min bonus ·{' '}
          {pointsPour100Ar * 5} pts = 500 Ar de réduction
        </div>
      )}

      {error && <p className="text-sm text-red-400">{error}</p>}
      {saved && <p className="text-sm text-emerald-400">Configuration enregistrée.</p>}

      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 disabled:opacity-50"
      >
        {saving ? 'Enregistrement...' : 'Enregistrer'}
      </button>
    </form>
  );
}
