'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  fetchTickets,
  StatutTicket,
  TicketDetail,
} from '@/lib/api';

type FilterTab = 'ALL' | StatutTicket;

const FILTERS: { id: FilterTab; label: string }[] = [
  { id: 'ALL', label: 'Tous' },
  { id: 'VALIDE', label: 'Non utilisés' },
  { id: 'ACTIVE', label: 'En cours' },
  { id: 'EXPIRE', label: 'Expirés' },
];

function StatutBadge({ statut }: { statut: StatutTicket }) {
  const styles = {
    VALIDE: 'bg-amber-950/50 text-amber-300 border-amber-500/40',
    ACTIVE: 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40',
    EXPIRE: 'bg-zinc-800/50 text-zinc-400 border-zinc-600/40',
  };

  const labels = {
    VALIDE: 'Non utilisé',
    ACTIVE: 'En cours',
    EXPIRE: 'Expiré',
  };

  return (
    <span
      className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${styles[statut]}`}
    >
      {labels[statut]}
    </span>
  );
}

function TicketDetailPanel({
  ticket,
  onClose,
}: {
  ticket: TicketDetail;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(ticket.codeUnique);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-700 bg-zinc-900 p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-lg font-semibold">Détail ticket</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-300"
          >
            Fermer
          </button>
        </div>

        <p className="font-mono text-2xl font-bold tracking-widest text-emerald-300">
          {ticket.codeUnique}
        </p>

        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-zinc-500">Statut</dt>
            <dd>
              <StatutBadge statut={ticket.statut} />
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500">Durée initiale</dt>
            <dd>{ticket.tempsInitial} min</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500">Temps restant</dt>
            <dd>{ticket.tempsRestant} min</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500">Poste</dt>
            <dd>{ticket.numeroPoste ? `PC ${ticket.numeroPoste}` : '—'}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500">Vendu par</dt>
            <dd>{ticket.creePar.username}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500">Date émission</dt>
            <dd>
              {new Date(ticket.createdAt).toLocaleString('fr-FR')}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={handleCopy}
          className="mt-6 w-full rounded-lg border border-zinc-700 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
        >
          {copied ? 'Copié !' : 'Copier le code'}
        </button>
      </div>
    </div>
  );
}

export function TicketList() {
  const [filter, setFilter] = useState<FilterTab>('ALL');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [tickets, setTickets] = useState<TicketDetail[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<TicketDetail | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  const loadTickets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchTickets({
        statut: filter === 'ALL' ? undefined : filter,
        q: debouncedSearch || undefined,
        limit: 50,
      });
      setTickets(result.tickets);
      setTotal(result.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de chargement');
    } finally {
      setLoading(false);
    }
  }, [filter, debouncedSearch]);

  useEffect(() => {
    void loadTickets();
  }, [loadTickets]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === f.id
                ? 'bg-emerald-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toUpperCase())}
        placeholder="Rechercher par code TCK-..."
        className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 font-mono text-white focus:border-emerald-500 focus:outline-none"
      />

      {error && (
        <p className="mb-4 rounded-lg bg-red-950/50 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      <p className="mb-2 text-sm text-zinc-500">
        {total} ticket{total !== 1 ? 's' : ''} trouvé{total !== 1 ? 's' : ''}
      </p>

      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">Code</th>
              <th className="px-4 py-3 font-medium">Statut</th>
              <th className="px-4 py-3 font-medium">Durée</th>
              <th className="px-4 py-3 font-medium">Restant</th>
              <th className="px-4 py-3 font-medium">Poste</th>
              <th className="px-4 py-3 font-medium">Vendu par</th>
              <th className="px-4 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-zinc-500">
                  Chargement...
                </td>
              </tr>
            ) : tickets.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-zinc-500">
                  Aucun ticket
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  onClick={() => setSelected(ticket)}
                  className="cursor-pointer border-b border-zinc-900 transition hover:bg-zinc-900/50"
                >
                  <td className="px-4 py-3 font-mono font-medium text-emerald-300">
                    {ticket.codeUnique}
                  </td>
                  <td className="px-4 py-3">
                    <StatutBadge statut={ticket.statut} />
                  </td>
                  <td className="px-4 py-3">{ticket.tempsInitial} min</td>
                  <td className="px-4 py-3">{ticket.tempsRestant} min</td>
                  <td className="px-4 py-3">
                    {ticket.numeroPoste ? `PC ${ticket.numeroPoste}` : '—'}
                  </td>
                  <td className="px-4 py-3">{ticket.creePar.username}</td>
                  <td className="px-4 py-3 text-zinc-400">
                    {new Date(ticket.createdAt).toLocaleString('fr-FR', {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <TicketDetailPanel
          ticket={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
