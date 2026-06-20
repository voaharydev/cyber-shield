'use client';

import { AppHeader } from '@/components/AppHeader';
import { PcGrid } from '@/components/PcGrid';
import { TicketSaleForm } from '@/components/TicketSaleForm';
import { useConfig } from '@/lib/use-config';
import { useSupabasePostes } from '@/lib/use-supabase-postes';
import { useCyber } from '@/lib/cyber-context';

export default function DashboardPage() {
  const { activeCyberId } = useCyber();
  const { postes, connected } = useSupabasePostes(activeCyberId);
  const { config } = useConfig();

  return (
    <div className="min-h-screen">
      <AppHeader
        title={`${config.nom} — Caisse`}
        subtitle="Surveillance temps réel via Supabase"
      >
        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              connected ? 'bg-emerald-400' : 'bg-red-500'
            }`}
          />
          <span className="text-sm text-zinc-400">
            {connected ? 'Realtime connecté' : 'Realtime déconnecté'}
          </span>
        </div>
      </AppHeader>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {!activeCyberId ? (
          <p className="text-amber-400">
            Sélectionnez un établissement pour afficher la caisse.
          </p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <PcGrid
                postes={postes}
                skeletonCount={config.nombrePostes}
                cyberId={activeCyberId}
              />
            </section>
            <section>
              <TicketSaleForm />
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
