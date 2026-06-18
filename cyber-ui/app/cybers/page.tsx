'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppHeader } from '@/components/AppHeader';
import { CyberCreateForm } from '@/components/CyberCreateForm';
import { useAuth } from '@/lib/auth';
import { CyberSummary, fetchCybers } from '@/lib/api';

export default function CybersPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();
  const [cybers, setCybers] = useState<CyberSummary[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { cybers: list } = await fetchCybers();
      setCybers(list);
    } finally {
      setLoading(false);
    }
  }, []);

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
        subtitle="Créer et lister les établissements"
      />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-2">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="mb-4 text-lg font-medium text-zinc-300">
            Établissements existants
          </h2>
          {loading ? (
            <p className="text-zinc-500">Chargement...</p>
          ) : cybers.length === 0 ? (
            <p className="text-zinc-500">Aucun cyber pour l&apos;instant.</p>
          ) : (
            <ul className="space-y-3">
              {cybers.map((cyber) => (
                <li
                  key={cyber.id}
                  className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3"
                >
                  <p className="font-medium text-zinc-200">{cyber.nom}</p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    {cyber.id}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {cyber.nombrePostes} postes — {cyber.prixParMinute} Ar/min
                  </p>
                </li>
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
