'use client';

import { AppHeader } from '@/components/AppHeader';
import { TestClientPanel } from '@/components/TestClientPanel';

export default function TestClientPage() {
  return (
    <div className="min-h-screen">
      <AppHeader
        title="Client de test PC"
        subtitle="Simulateur WebSocket pour l'établissement actif"
      />

      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="mb-6 text-sm text-zinc-400">
            Simulateur de poste WPF : connexion persistante{' '}
            <code className="text-zinc-300">?cyber=ID&amp;poste=N</code> (poste
            jaune sur le dashboard). Déverrouillage ticket prépayé, session
            libre (post-payé) et arrêt — sans client Windows.
          </p>
          <TestClientPanel />
        </div>
      </main>
    </div>
  );
}
