'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { SalesStatsByCyber } from '@/lib/api';

interface CyberCompareChartsProps {
  rows: SalesStatsByCyber[];
}

const BAR_COLORS = [
  '#34d399',
  '#60a5fa',
  '#fbbf24',
  '#f472b6',
  '#a78bfa',
  '#fb923c',
];

function formatAr(amount: number): string {
  return `${amount.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} Ar`;
}

function sortByRevenue(rows: SalesStatsByCyber[]): SalesStatsByCyber[] {
  return [...rows].sort((a, b) => b.revenue - a.revenue);
}

export function CyberCompareCharts({ rows }: CyberCompareChartsProps) {
  const sorted = sortByRevenue(rows);

  if (sorted.length === 0) {
    return (
      <p className="text-zinc-500">Aucun établissement à comparer.</p>
    );
  }

  const revenueData = sorted.map((row, index) => ({
    nom: row.nom,
    revenue: row.revenue,
    fill: BAR_COLORS[index % BAR_COLORS.length],
  }));

  const ticketsData = [...sorted]
    .sort((a, b) => b.ticketCount - a.ticketCount)
    .map((row, index) => ({
      nom: row.nom,
      tickets: row.ticketCount,
      fill: BAR_COLORS[index % BAR_COLORS.length],
    }));

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-medium text-zinc-400">
          Chiffre d&apos;affaires par établissement
        </h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={revenueData}
              layout="vertical"
              margin={{ top: 8, right: 16, left: 8, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
              <XAxis
                type="number"
                tick={{ fill: '#a1a1aa', fontSize: 11 }}
                tickFormatter={(v) => `${(Number(v) / 1000).toFixed(0)}k`}
              />
              <YAxis
                type="category"
                dataKey="nom"
                width={120}
                tick={{ fill: '#a1a1aa', fontSize: 11 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '8px',
                }}
                formatter={(value) => [formatAr(Number(value ?? 0)), 'CA']}
              />
              <Bar dataKey="revenue" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-zinc-400">
          Tickets vendus par établissement
        </h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ticketsData}
              layout="vertical"
              margin={{ top: 8, right: 16, left: 8, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
              <XAxis
                type="number"
                tick={{ fill: '#a1a1aa', fontSize: 11 }}
              />
              <YAxis
                type="category"
                dataKey="nom"
                width={120}
                tick={{ fill: '#a1a1aa', fontSize: 11 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '8px',
                }}
                formatter={(value) => [Number(value ?? 0), 'Tickets']}
              />
              <Bar dataKey="tickets" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
