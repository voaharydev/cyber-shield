'use client';

import { AppHeader } from '@/components/AppHeader';
import { TestClientPanel } from '@/components/TestClientPanel';

export default function TestClientPage() {
  return (
    <div className="min-h-screen">
      <AppHeader
        title="Simulateur de poste"
        subtitle="Aperçu de l'écran PC pour l'établissement actif"
      />

      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <p className="mb-6 text-sm text-zinc-400">
            Simulez ce que voit un client sur son poste : écran verrouillé,
            chrono prépayé ou barre de session libre. Tant que cette page est
            ouverte, le poste choisi apparaît en{' '}
            <span className="text-yellow-400">jaune</span> sur le dashboard.
          </p>
          <TestClientPanel />
        </div>
      </main>
    </div>
  );
}
