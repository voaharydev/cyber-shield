'use client';

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { SalesGroupBy, SalesStatsResponse } from '@/lib/api';

interface SalesStatsChartsProps {
  stats: SalesStatsResponse;
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

function buildChartData(stats: SalesStatsResponse) {
  const prevByIndex = stats.previousYear.buckets;
  return stats.buckets.map((bucket, index) => ({
    label: bucket.label,
    tickets: bucket.ticketCount,
    revenue: bucket.revenue,
    prevTickets: prevByIndex[index]?.ticketCount ?? 0,
    prevRevenue: prevByIndex[index]?.revenue ?? 0,
    prevLabel: prevByIndex[index]?.label ?? '',
  }));
}

function formatTooltipValue(value: number, isRevenue: boolean): string {
  if (isRevenue) {
    return `${value.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} Ar`;
  }
  return String(value);
}

export function SalesStatsCharts({ stats }: SalesStatsChartsProps) {
  const data = buildChartData(stats);
  const avgTickets = stats.averages.ticketCount;
  const avgRevenue = stats.averages.revenue;
  const unit = averageLabel(stats.groupBy);

  if (data.length === 0) {
    return (
      <p className="text-zinc-500">Aucune donnée à afficher sur cette période.</p>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-medium text-zinc-400">
          Tickets vendus — évolution et moyenne {unit}
        </h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
              <XAxis
                dataKey="label"
                tick={{ fill: '#a1a1aa', fontSize: 11 }}
                interval="preserveStartEnd"
              />
              <YAxis tick={{ fill: '#a1a1aa', fontSize: 11 }} width={40} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#e4e4e7' }}
                formatter={(value, name) => {
                  const v = Number(value ?? 0);
                  if (name === 'CA (période)' || name === 'CA (N-1)') {
                    return [formatTooltipValue(v, true), name];
                  }
                  return [v, name];
                }}
                labelFormatter={(label, payload) => {
                  const row = payload?.[0]?.payload as
                    | { prevLabel?: string }
                    | undefined;
                  if (row?.prevLabel) {
                    return `${label} (N-1 : ${row.prevLabel})`;
                  }
                  return String(label);
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: '#a1a1aa' }} />
              <ReferenceLine
                y={avgTickets}
                stroke="#fbbf24"
                strokeDasharray="4 4"
                label={{
                  value: `Moy. ${avgTickets}`,
                  fill: '#fbbf24',
                  fontSize: 11,
                  position: 'insideTopRight',
                }}
              />
              <Bar
                dataKey="tickets"
                name="Tickets (période)"
                fill="#34d399"
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="prevTickets"
                name="Tickets (N-1)"
                stroke="#64748b"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-zinc-400">
          Chiffre d&apos;affaires — évolution et moyenne {unit}
        </h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
              <XAxis
                dataKey="label"
                tick={{ fill: '#a1a1aa', fontSize: 11 }}
                interval="preserveStartEnd"
              />
              <YAxis
                tick={{ fill: '#a1a1aa', fontSize: 11 }}
                width={56}
                tickFormatter={(v) =>
                  `${(Number(v) / 1000).toFixed(0)}k`
                }
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#e4e4e7' }}
                formatter={(value, name) => {
                  const v = Number(value ?? 0);
                  return [formatTooltipValue(v, true), String(name)];
                }}
                labelFormatter={(label, payload) => {
                  const row = payload?.[0]?.payload as
                    | { prevLabel?: string }
                    | undefined;
                  if (row?.prevLabel) {
                    return `${label} (N-1 : ${row.prevLabel})`;
                  }
                  return String(label);
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: '#a1a1aa' }} />
              <ReferenceLine
                y={avgRevenue}
                stroke="#fbbf24"
                strokeDasharray="4 4"
                label={{
                  value: `Moy. ${Math.round(avgRevenue).toLocaleString('fr-FR')}`,
                  fill: '#fbbf24',
                  fontSize: 11,
                  position: 'insideTopRight',
                }}
              />
              <Bar
                dataKey="revenue"
                name="CA (période)"
                fill="#fbbf24"
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="prevRevenue"
                name="CA (N-1)"
                stroke="#64748b"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
