import { SalesGroupBy, SalesStatsResponse } from '@/lib/api';

const SEPARATOR = ';';

function escapeCell(value: string | number): string {
  const text = String(value);
  if (text.includes(SEPARATOR) || text.includes('"') || /[\r\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function row(cells: (string | number)[]): string {
  return cells.map(escapeCell).join(SEPARATOR);
}

function groupByLabel(groupBy: SalesGroupBy): string {
  switch (groupBy) {
    case 'week':
      return 'Par semaine';
    case 'month':
      return 'Par mois';
    default:
      return 'Par jour';
  }
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

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function buildFilename(
  stats: SalesStatsResponse,
  scopeLabel: string,
): string {
  const scope = slugify(scopeLabel) || 'export';
  return `stats-ventes_${stats.from}_${stats.to}_${scope}.csv`;
}

function buildCsvContent(
  stats: SalesStatsResponse,
  scopeLabel: string,
): string {
  const lines: string[] = [];
  const unit = averageLabel(stats.groupBy);

  lines.push(row(['Période', `${stats.from} → ${stats.to}`]));
  lines.push(row(['Agrégation', groupByLabel(stats.groupBy)]));
  lines.push(row(['Périmètre', scopeLabel]));
  lines.push('');

  lines.push(row(['Résumé']));
  lines.push(
    row(['Libellé', 'Période courante', 'Moyenne', 'N-1', 'Variation']),
  );
  lines.push(
    row([
      'Tickets vendus',
      stats.totals.ticketCount,
      `${stats.averages.ticketCount} ${unit}`,
      stats.previousYear.totals.ticketCount,
      formatDelta(
        stats.totals.ticketCount,
        stats.previousYear.totals.ticketCount,
      ),
    ]),
  );
  lines.push(
    row([
      "Chiffre d'affaires (Ar)",
      stats.totals.revenue,
      `${stats.averages.revenue} ${unit}`,
      stats.previousYear.totals.revenue,
      formatDelta(stats.totals.revenue, stats.previousYear.totals.revenue),
    ]),
  );
  lines.push('');

  lines.push(row(['Détail par période']));
  lines.push(
    row(['Période', 'Tickets', 'Tickets N-1', 'CA (Ar)', 'CA N-1 (Ar)']),
  );
  for (let i = 0; i < stats.buckets.length; i++) {
    const bucket = stats.buckets[i];
    const prev = stats.previousYear.buckets[i];
    lines.push(
      row([
        bucket.label,
        bucket.ticketCount,
        prev?.ticketCount ?? 0,
        bucket.revenue,
        prev?.revenue ?? 0,
      ]),
    );
  }

  if (stats.byCyber && stats.byCyber.length > 0) {
    lines.push('');
    lines.push(row(['Par établissement']));
    lines.push(row(['Établissement', 'Tickets', 'CA (Ar)']));
    for (const cyber of stats.byCyber) {
      lines.push(row([cyber.nom, cyber.ticketCount, cyber.revenue]));
    }
  }

  return `\uFEFF${lines.join('\r\n')}`;
}

export function exportSalesStatsCsv(
  stats: SalesStatsResponse,
  options: { scopeLabel: string },
): void {
  const content = buildCsvContent(stats, options.scopeLabel);
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = buildFilename(stats, options.scopeLabel);
  link.click();
  URL.revokeObjectURL(url);
}
