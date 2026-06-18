'use client';

import { useCallback, useEffect, useState } from 'react';
import { SalesStatsCharts } from '@/components/SalesStatsCharts';
import {
  fetchSalesStats,
  SalesGroupBy,
  SalesStatsResponse,
} from '@/lib/api';
import { useCyber } from '@/lib/cyber-context';
import { exportSalesStatsCsv } from '@/lib/export-sales-stats';

type StatsTab = 'active' | 'all';

type PeriodPreset = '7d' | '30d' | '90d' | '12m';

function formatAr(amount: number): string {
  return `${amount.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} Ar`;
}

function toIsoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function computeRange(preset: PeriodPreset): { from: string; to: string } {
  const to = new Date();
  const from = new Date();
  from.setUTCHours(0, 0, 0, 0);
  to.setUTCHours(0, 0, 0, 0);

  switch (preset) {
    case '7d':
      from.setUTCDate(from.getUTCDate() - 7);
      break;
    case '30d':
      from.setUTCDate(from.getUTCDate() - 30);
      break;
    case '90d':
      from.setUTCDate(from.getUTCDate() - 90);
      break;
    case '12m':
      from.setUTCMonth(from.getUTCMonth() - 12);
      break;
  }

  return { from: toIsoDate(from), to: toIsoDate(to) };
}

function averageLabel(groupBy: SalesGroupBy): string {
  switch (groupBy) {
    case 'week':
      return 'par semaine';
    case 'month':
      return 'par mois';
    default:
      return 'par jour';
  }
}

function formatDelta(current: number, previous: number): string {
  if (previous === 0) {
    return current > 0 ? '+100 %' : '—';
  }
  const pct = ((current - previous) / previous) * 100;
  const sign = pct > 0 ? '+' : '';
  return `${sign}${pct.toFixed(1)} %`;
}

function deltaColor(current: number, previous: number): string {
  if (current === previous) return 'text-zinc-400';
  return current > previous ? 'text-emerald-400' : 'text-red-400';
}

interface StatCardProps {
  title: string;
  value: string;
  average: string;
  previousValue: string;
  previousPeriod: string;
  delta: string;
  deltaClass: string;
  valueClass: string;
}

function StatCard({
  title,
  value,
  average,
  previousValue,
  previousPeriod,
  delta,
  deltaClass,
  valueClass,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <p className="text-sm text-zinc-500">{title}</p>
      <p className={`mt-2 text-3xl font-bold ${valueClass}`}>{value}</p>
      <p className="mt-2 text-sm text-zinc-400">
        Moyenne {average}
      </p>
      <div className="mt-4 border-t border-zinc-800 pt-3">
        <p className="text-xs text-zinc-500">Même période N-1 ({previousPeriod})</p>
        <p className="mt-1 text-lg font-medium text-zinc-300">{previousValue}</p>
        <p className={`mt-1 text-sm ${deltaClass}`}>{delta} vs N-1</p>
      </div>
    </div>
  );
}

export function SalesStatsPanel() {
  const { activeCyberId, activeCyber } = useCyber();
  const [tab, setTab] = useState<StatsTab>('active');
  const [groupBy, setGroupBy] = useState<SalesGroupBy>('day');
  const [preset, setPreset] = useState<PeriodPreset>('30d');
  const [stats, setStats] = useState<SalesStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const range = computeRange(preset);
      const cyberId = tab === 'active' ? activeCyberId ?? undefined : undefined;
      const data = await fetchSalesStats({
        groupBy,
        from: range.from,
        to: range.to,
        cyberId,
      });
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de chargement');
      setStats(null);
    } finally {
      setLoading(false);
    }
  }, [tab, groupBy, preset, activeCyberId]);

  useEffect(() => {
    void load();
  }, [load]);

  const unit = averageLabel(groupBy);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTab('active')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            tab === 'active'
              ? 'bg-emerald-600 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          Établissement actif
          {activeCyber && (
            <span className="ml-1 opacity-80">({activeCyber.nom})</span>
          )}
        </button>
        <button
          type="button"
          onClick={() => setTab('all')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            tab === 'all'
              ? 'bg-sky-600 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          Tous les établissements
        </button>
      </div>

      <div className="flex flex-wrap items-end gap-4">
        <label className="flex flex-col gap-1 text-sm text-zinc-400">
          Période
          <select
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value as SalesGroupBy)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-200"
          >
            <option value="day">Par jour</option>
            <option value="week">Par semaine</option>
            <option value="month">Par mois</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm text-zinc-400">
          Plage
          <select
            value={preset}
            onChange={(e) => setPreset(e.target.value as PeriodPreset)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-200"
          >
            <option value="7d">7 derniers jours</option>
            <option value="30d">30 derniers jours</option>
            <option value="90d">90 derniers jours</option>
            <option value="12m">12 derniers mois</option>
          </select>
        </label>

        <button
          type="button"
          onClick={() => void load()}
          disabled={loading}
          className="rounded-lg bg-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-600 disabled:opacity-50"
        >
          Actualiser
        </button>

        <button
          type="button"
          onClick={() =>
            stats &&
            exportSalesStatsCsv(stats, {
              scopeLabel:
                tab === 'active' && activeCyber
                  ? activeCyber.nom
                  : 'Tous les établissements',
            })
          }
          disabled={loading || !stats}
          className="rounded-lg border border-zinc-600 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 disabled:opacity-50"
        >
          Exporter CSV
        </button>
      </div>

      {loading ? (
        <p className="text-zinc-500">Chargement...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : stats ? (
        <>
          <p className="text-sm text-zinc-500">
            Du {stats.from} au {stats.to}
            {stats.cyberId && activeCyber ? ` — ${activeCyber.nom}` : ''}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard
              title="Tickets vendus"
              value={stats.totals.ticketCount.toLocaleString('fr-FR')}
              average={`${stats.averages.ticketCount.toLocaleString('fr-FR')} ${unit}`}
              previousValue={stats.previousYear.totals.ticketCount.toLocaleString(
                'fr-FR',
              )}
              previousPeriod={`${stats.previousYear.from} → ${stats.previousYear.to}`}
              delta={formatDelta(
                stats.totals.ticketCount,
                stats.previousYear.totals.ticketCount,
              )}
              deltaClass={deltaColor(
                stats.totals.ticketCount,
                stats.previousYear.totals.ticketCount,
              )}
              valueClass="text-emerald-400"
            />
            <StatCard
              title="Chiffre d'affaires"
              value={formatAr(stats.totals.revenue)}
              average={`${formatAr(stats.averages.revenue)} ${unit}`}
              previousValue={formatAr(stats.previousYear.totals.revenue)}
              previousPeriod={`${stats.previousYear.from} → ${stats.previousYear.to}`}
              delta={formatDelta(
                stats.totals.revenue,
                stats.previousYear.totals.revenue,
              )}
              deltaClass={deltaColor(
                stats.totals.revenue,
                stats.previousYear.totals.revenue,
              )}
              valueClass="text-amber-400"
            />
          </div>

          <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="mb-4 text-lg font-medium text-zinc-300">Graphiques</h2>
            <SalesStatsCharts stats={stats} />
          </section>

          <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="mb-4 text-lg font-medium text-zinc-300">
              Détail par période
            </h2>
            {stats.buckets.length === 0 ? (
              <p className="text-zinc-500">Aucune vente sur cette période.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500">
                      <th className="pb-2 pr-4 font-medium">Période</th>
                      <th className="pb-2 pr-4 font-medium text-right">
                        Tickets
                      </th>
                      <th className="pb-2 pr-4 font-medium text-right">
                        Tickets N-1
                      </th>
                      <th className="pb-2 pr-4 font-medium text-right">
                        CA (Ar)
                      </th>
                      <th className="pb-2 font-medium text-right">CA N-1 (Ar)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.buckets.map((bucket, index) => {
                      const prev = stats.previousYear.buckets[index];
                      return (
                        <tr
                          key={bucket.label}
                          className="border-b border-zinc-800/50 text-zinc-300"
                        >
                          <td className="py-2 pr-4">{bucket.label}</td>
                          <td className="py-2 pr-4 text-right">
                            {bucket.ticketCount}
                          </td>
                          <td className="py-2 pr-4 text-right text-zinc-500">
                            {prev?.ticketCount ?? 0}
                          </td>
                          <td className="py-2 pr-4 text-right">
                            {formatAr(bucket.revenue)}
                          </td>
                          <td className="py-2 text-right text-zinc-500">
                            {formatAr(prev?.revenue ?? 0)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {tab === 'all' && stats.byCyber && stats.byCyber.length > 0 && (
            <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h2 className="mb-4 text-lg font-medium text-zinc-300">
                Par établissement
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500">
                      <th className="pb-2 pr-4 font-medium">Établissement</th>
                      <th className="pb-2 pr-4 font-medium text-right">
                        Tickets
                      </th>
                      <th className="pb-2 font-medium text-right">CA (Ar)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.byCyber.map((row) => (
                      <tr
                        key={row.cyberId}
                        className="border-b border-zinc-800/50 text-zinc-300"
                      >
                        <td className="py-2 pr-4">{row.nom}</td>
                        <td className="py-2 pr-4 text-right">
                          {row.ticketCount}
                        </td>
                        <td className="py-2 text-right">
                          {formatAr(row.revenue)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </>
      ) : null}
    </div>
  );
}
