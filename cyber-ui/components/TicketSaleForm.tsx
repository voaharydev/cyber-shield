'use client';

import { useEffect, useState } from 'react';
import { createTicket, TypePaiement } from '@/lib/api';
import { useConfig } from '@/lib/use-config';

const PAIEMENTS: { value: TypePaiement; label: string }[] = [
  { value: 'ESPECES', label: 'Espèces' },
  { value: 'MOBILE_MONEY', label: 'Mobile Money' },
  { value: 'CARTE', label: 'Carte' },
];

export function TicketSaleForm() {
  const { config } = useConfig();
  const [tempsInitial, setTempsInitial] = useState<number>(60);
  const [typePaiement, setTypePaiement] = useState<TypePaiement>('ESPECES');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const montantTotal = tempsInitial * config.prixParMinute;

  useEffect(() => {
    if (config.dureesTicket.length > 0) {
      setTempsInitial((current) =>
        config.dureesTicket.includes(current)
          ? current
          : config.dureesTicket[0],
      );
    }
  }, [config.dureesTicket]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setGeneratedCode(null);
    setCopied(false);

    setLoading(true);
    try {
      const result = await createTicket({
        tempsInitial,
        typePaiement,
      });
      setGeneratedCode(result.ticket.codeUnique);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!generatedCode) return;
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Impossible de copier le code');
    }
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h2 className="mb-4 text-xl font-semibold">Vente de ticket</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="rounded-lg border border-zinc-700 bg-zinc-950/50 px-4 py-3">
          <p className="text-sm text-zinc-400">Tarif</p>
          <p className="text-lg font-medium text-zinc-200">
            {config.prixParMinute.toLocaleString('fr-FR')} Ar / min
          </p>
        </div>

        <div>
          <label
            htmlFor="duree"
            className="mb-1 block text-sm text-zinc-400"
          >
            Durée
          </label>
          <select
            id="duree"
            value={tempsInitial}
            onChange={(e) => setTempsInitial(Number(e.target.value))}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
          >
            {config.dureesTicket.map((d) => (
              <option key={d} value={d}>
                {d} minutes
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 px-4 py-3">
          <p className="text-sm text-emerald-400">Total à encaisser</p>
          <p className="text-2xl font-bold text-emerald-300">
            {montantTotal.toLocaleString('fr-FR')} Ar
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            {tempsInitial} min × {config.prixParMinute.toLocaleString('fr-FR')} Ar
          </p>
        </div>

        <div>
          <label
            htmlFor="paiement"
            className="mb-1 block text-sm text-zinc-400"
          >
            Type de paiement
          </label>
          <select
            id="paiement"
            value={typePaiement}
            onChange={(e) => setTypePaiement(e.target.value as TypePaiement)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
          >
            {PAIEMENTS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="rounded-lg bg-red-950/50 px-3 py-2 text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-emerald-600 py-3 font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Génération...' : 'Vendre le ticket'}
        </button>
      </form>

      {generatedCode && (
        <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-950/30 p-4 text-center">
          <p className="mb-2 text-sm text-emerald-400">Code généré</p>
          <p className="font-mono text-3xl font-bold tracking-widest text-emerald-300">
            {generatedCode}
          </p>
          <button
            type="button"
            onClick={handleCopy}
            className="mt-3 text-sm text-emerald-400 underline hover:text-emerald-300"
          >
            {copied ? 'Copié !' : 'Copier le code'}
          </button>
        </div>
      )}
    </div>
  );
}
