'use client';

import { useEffect, useMemo, useState } from 'react';
import { createTicketAction } from '@/app/actions/sessions';
import { TypePaiement } from '@/lib/api';
import {
  createFideliteClient,
  FideliteClient,
  FideliteConfig,
  lookupFideliteClient,
} from '@/lib/fidelite-api';
import { useCyber } from '@/lib/cyber-context';
import { useConfig } from '@/lib/use-config';

const PAIEMENTS: { value: TypePaiement; label: string }[] = [
  { value: 'ESPECES', label: 'Espèces' },
  { value: 'MOBILE_MONEY', label: 'Mobile Money' },
  { value: 'CARTE', label: 'Carte' },
];

type EchangeMode = 'NONE' | 'MINUTES' | 'REDUCTION';

function previewEchange(
  config: FideliteConfig,
  mode: EchangeMode,
  points: number,
): { minutesBonus: number; reductionAr: number; effectivePoints: number } {
  if (mode === 'MINUTES') {
    const minutesBonus = Math.floor(points / config.pointsPourMinuteGratuite);
    return {
      minutesBonus,
      reductionAr: 0,
      effectivePoints: minutesBonus * config.pointsPourMinuteGratuite,
    };
  }
  if (mode === 'REDUCTION') {
    const units = Math.floor(points / config.pointsPour100Ar);
    return {
      minutesBonus: 0,
      reductionAr: units * 100,
      effectivePoints: units * config.pointsPour100Ar,
    };
  }
  return { minutesBonus: 0, reductionAr: 0, effectivePoints: 0 };
}

export function TicketSaleForm() {
  const { activeCyberId } = useCyber();
  const { config } = useConfig();
  const [tempsInitial, setTempsInitial] = useState<number>(60);
  const [typePaiement, setTypePaiement] = useState<TypePaiement>('ESPECES');
  const [telephone, setTelephone] = useState('');
  const [client, setClient] = useState<FideliteClient | null>(null);
  const [fideliteConfig, setFideliteConfig] = useState<FideliteConfig | null>(
    null,
  );
  const [echangeMode, setEchangeMode] = useState<EchangeMode>('NONE');
  const [pointsAUtiliser, setPointsAUtiliser] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [lastSaleSummary, setLastSaleSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const montantBrut = tempsInitial * config.prixParMinute;

  const preview = useMemo(() => {
    if (!fideliteConfig || echangeMode === 'NONE' || pointsAUtiliser <= 0) {
      return { minutesBonus: 0, reductionAr: 0, effectivePoints: 0 };
    }
    return previewEchange(fideliteConfig, echangeMode, pointsAUtiliser);
  }, [fideliteConfig, echangeMode, pointsAUtiliser]);

  const montantFinal = Math.max(0, montantBrut - preview.reductionAr);
  const dureeTotale = tempsInitial + preview.minutesBonus;
  const pointsGagnes =
    client && fideliteConfig?.actif
      ? tempsInitial * fideliteConfig.pointsParMinuteAchat
      : 0;

  useEffect(() => {
    if (config.dureesTicket.length > 0) {
      setTempsInitial((current) =>
        config.dureesTicket.includes(current)
          ? current
          : config.dureesTicket[0],
      );
    }
  }, [config.dureesTicket]);

  useEffect(() => {
    setEchangeMode('NONE');
    setPointsAUtiliser(0);
  }, [client?.id]);

  async function handleLookup() {
    if (!telephone.trim()) return;
    setLookupLoading(true);
    setError(null);
    setClient(null);
    setFideliteConfig(null);
    try {
      const result = await lookupFideliteClient(telephone.trim());
      setFideliteConfig(result.config);
      setClient(result.client);
      if (!result.client) {
        setError('Client non inscrit — utilisez « Inscrire » pour l’ajouter.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de recherche');
    } finally {
      setLookupLoading(false);
    }
  }

  async function handleRegister() {
    if (!telephone.trim()) return;
    setLookupLoading(true);
    setError(null);
    try {
      const newClient = await createFideliteClient(telephone.trim());
      const result = await lookupFideliteClient(telephone.trim());
      setClient(newClient);
      setFideliteConfig(result.config);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inscription');
    } finally {
      setLookupLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setGeneratedCode(null);
    setLastSaleSummary(null);
    setCopied(false);

    if (
      echangeMode !== 'NONE' &&
      preview.effectivePoints !== pointsAUtiliser
    ) {
      setError(
        echangeMode === 'MINUTES'
          ? `Les points doivent être un multiple de ${fideliteConfig?.pointsPourMinuteGratuite}`
          : `Les points doivent être un multiple de ${fideliteConfig?.pointsPour100Ar}`,
      );
      return;
    }

    setLoading(true);
    try {
      const payload = {
        tempsInitial,
        typePaiement,
        ...(client && telephone.trim() ? { telephone: telephone.trim() } : {}),
        ...(echangeMode !== 'NONE' && pointsAUtiliser > 0
          ? {
              echangePoints: {
                type: echangeMode as 'MINUTES' | 'REDUCTION',
                points: pointsAUtiliser,
              },
            }
          : {}),
      };

      if (!activeCyberId) {
        setError('Aucun établissement sélectionné');
        return;
      }

      const result = await createTicketAction(activeCyberId, payload);
      setGeneratedCode(result.ticket.codeUnique);

      const parts: string[] = [];
      if (result.ticket.minutesBonus) {
        parts.push(`+${result.ticket.minutesBonus} min bonus`);
      }
      if (result.ticket.reductionAr) {
        parts.push(`-${result.ticket.reductionAr.toLocaleString('fr-FR')} Ar`);
      }
      if (result.ticket.pointsGagnes) {
        parts.push(`+${result.ticket.pointsGagnes} pts`);
      }
      if (result.ticket.pointsUtilises) {
        parts.push(`-${result.ticket.pointsUtilises} pts`);
      }
      setLastSaleSummary(parts.length > 0 ? parts.join(' · ') : null);

      if (client && telephone.trim()) {
        const refreshed = await lookupFideliteClient(telephone.trim());
        setClient(refreshed.client);
        setFideliteConfig(refreshed.config);
        setEchangeMode('NONE');
        setPointsAUtiliser(0);
      }
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

  const fideliteActive = fideliteConfig?.actif ?? false;
  const canUsePoints =
    !!client && fideliteActive && client.soldePoints > 0;

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

        <div className="rounded-lg border border-violet-500/20 bg-violet-950/20 p-4 space-y-3">
          <p className="text-sm font-medium text-violet-300">Fidélité réseau</p>
          <div className="flex flex-wrap gap-2">
            <input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="032 12 345 67"
              className="min-w-[12rem] flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-violet-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => void handleLookup()}
              disabled={lookupLoading || !telephone.trim()}
              className="rounded-lg bg-violet-700 px-4 py-2 text-sm text-white hover:bg-violet-600 disabled:opacity-50"
            >
              {lookupLoading ? '...' : 'Rechercher'}
            </button>
            <button
              type="button"
              onClick={() => void handleRegister()}
              disabled={lookupLoading || !telephone.trim()}
              className="rounded-lg border border-violet-600 px-4 py-2 text-sm text-violet-300 hover:bg-violet-950 disabled:opacity-50"
            >
              Inscrire
            </button>
          </div>

          {client && (
            <div className="text-sm text-zinc-300">
              <span className="text-violet-400">{client.telephoneDisplay}</span>
              {client.nom && (
                <span className="ml-2 text-zinc-500">({client.nom})</span>
              )}
              <span className="ml-3 font-medium text-emerald-400">
                {client.soldePoints} pts
              </span>
            </div>
          )}

          {!fideliteActive && fideliteConfig && (
            <p className="text-xs text-amber-400">
              Programme fidélité désactivé — gain et échange indisponibles.
            </p>
          )}

          {canUsePoints && fideliteConfig && (
            <div className="space-y-2 border-t border-violet-500/20 pt-3">
              <p className="text-xs text-zinc-500">Utiliser des points</p>
              <div className="flex flex-wrap gap-3 text-sm">
                {(['NONE', 'MINUTES', 'REDUCTION'] as EchangeMode[]).map(
                  (mode) => (
                    <label key={mode} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="echangeMode"
                        checked={echangeMode === mode}
                        onChange={() => {
                          setEchangeMode(mode);
                          setPointsAUtiliser(0);
                        }}
                      />
                      <span className="text-zinc-300">
                        {mode === 'NONE'
                          ? 'Aucun'
                          : mode === 'MINUTES'
                            ? 'Minutes gratuites'
                            : 'Réduction Ar'}
                      </span>
                    </label>
                  ),
                )}
              </div>

              {echangeMode !== 'NONE' && (
                <div>
                  <input
                    type="number"
                    min={0}
                    max={client.soldePoints}
                    step={
                      echangeMode === 'MINUTES'
                        ? fideliteConfig.pointsPourMinuteGratuite
                        : fideliteConfig.pointsPour100Ar
                    }
                    value={pointsAUtiliser || ''}
                    onChange={(e) =>
                      setPointsAUtiliser(Number(e.target.value) || 0)
                    }
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white"
                    placeholder="Points à utiliser"
                  />
                  {preview.minutesBonus > 0 && (
                    <p className="mt-1 text-xs text-emerald-400">
                      → {preview.minutesBonus} min bonus
                    </p>
                  )}
                  {preview.reductionAr > 0 && (
                    <p className="mt-1 text-xs text-emerald-400">
                      → -{preview.reductionAr.toLocaleString('fr-FR')} Ar
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="duree" className="mb-1 block text-sm text-zinc-400">
            Durée achetée
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

        <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 px-4 py-3 space-y-1">
          <p className="text-sm text-emerald-400">Total à encaisser</p>
          <p className="text-2xl font-bold text-emerald-300">
            {montantFinal.toLocaleString('fr-FR')} Ar
          </p>
          {preview.reductionAr > 0 && (
            <p className="text-xs text-zinc-500 line-through">
              {montantBrut.toLocaleString('fr-FR')} Ar
            </p>
          )}
          <p className="text-xs text-zinc-500">
            Durée ticket : {dureeTotale} min
            {preview.minutesBonus > 0 && ` (${tempsInitial} + ${preview.minutesBonus} bonus)`}
          </p>
          {pointsGagnes > 0 && (
            <p className="text-xs text-violet-400">
              +{pointsGagnes} pts après cette vente
            </p>
          )}
        </div>

        <div>
          <label htmlFor="paiement" className="mb-1 block text-sm text-zinc-400">
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
          {lastSaleSummary && (
            <p className="mt-2 text-sm text-violet-300">{lastSaleSummary}</p>
          )}
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
