'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppHeader } from '@/components/AppHeader';
import { CyberCreateForm } from '@/components/CyberCreateForm';
import { CyberListItem } from '@/components/CyberListItem';
import { useAuth } from '@/lib/auth';
import { CyberSummary, fetchCybers } from '@/lib/api';

export default function CybersPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();
  const [cybers, setCybers] = useState<CyberSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [includeInactive, setIncludeInactive] = useState(true);
  const [includeArchived, setIncludeArchived] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { cybers: list } = await fetchCybers(undefined, {
        includeInactive,
        includeArchived,
      });
      setCybers(list);
    } finally {
      setLoading(false);
    }
  }, [includeInactive, includeArchived]);

  useEffect(() => {
    if (!isAdmin) {
      router.replace('/dashboard');
      return;
    }
    void load();
  }, [isAdmin, router, load]);

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <AppHeader
        title="Gestion des cybers"
        subtitle="Créer, modifier, désactiver, archiver et dupliquer les établissements"
      />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-2">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-medium text-zinc-300">
              Établissements
            </h2>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeInactive}
                  onChange={(e) => setIncludeInactive(e.target.checked)}
                  className="rounded border-zinc-600"
                />
                Désactivés
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeArchived}
                  onChange={(e) => setIncludeArchived(e.target.checked)}
                  className="rounded border-zinc-600"
                />
                Archivés
              </label>
            </div>
          </div>
          {loading ? (
            <p className="text-zinc-500">Chargement...</p>
          ) : cybers.length === 0 ? (
            <p className="text-zinc-500">Aucun cyber pour l&apos;instant.</p>
          ) : (
            <ul className="space-y-3">
              {cybers.map((cyber) => (
                <CyberListItem
                  key={cyber.id}
                  cyber={cyber}
                  onChanged={() => void load()}
                />
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="mb-4 text-lg font-medium text-zinc-300">
            Nouveau cybercafé
          </h2>
          <CyberCreateForm onCreated={() => void load()} />
        </section>
      </main>
    </div>
  );
}
