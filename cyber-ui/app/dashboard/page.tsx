'use client';

import { AppHeader } from '@/components/AppHeader';
import { PcGrid } from '@/components/PcGrid';
import { TicketSaleForm } from '@/components/TicketSaleForm';
import { useConfig } from '@/lib/use-config';
import { useCyberSocket } from '@/lib/websocket';
import { useCyber } from '@/lib/cyber-context';

export default function DashboardPage() {
  const { activeCyberId } = useCyber();
  const { postes, connected } = useCyberSocket(activeCyberId);
  const { config } = useConfig();

  return (
    <div className="min-h-screen">
      <AppHeader
        title={`${config.nom} — Caisse`}
        subtitle="Surveillance temps réel des postes"
      >
        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              connected ? 'bg-emerald-400' : 'bg-red-500'
            }`}
          />
          <span className="text-sm text-zinc-400">
            {connected ? 'WS connecté' : 'WS déconnecté'}
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
              <h2 className="mb-4 text-lg font-medium text-zinc-300">
                Grille des postes
              </h2>
              <PcGrid postes={postes} skeletonCount={config.nombrePostes} />
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Prépayé en cours
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Session libre
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  À payer (bloqué)
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Prêt (connecté)
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  Hors ligne
                </span>
              </div>
            </section>

            <aside>
              <TicketSaleForm />
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
