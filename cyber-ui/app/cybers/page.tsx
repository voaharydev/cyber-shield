'use client';

import { AppHeader } from '@/components/AppHeader';
import { CyberCreateForm } from '@/components/CyberCreateForm';
import { useAuth } from '@/lib/auth';
import { useCyber } from '@/lib/cyber-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CybersPage() {
  const { isAdmin } = useAuth();
  const { cybers, loading } = useCyber();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin) {
      router.replace('/dashboard');
    }
  }, [isAdmin, router]);

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
          <CyberCreateForm />
        </section>
      </main>
    </div>
  );
}
