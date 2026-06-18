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
            Ce simulateur imite le client WPF : connexion{' '}
            <code className="text-zinc-300">?cyber=ID&amp;poste=N</code> puis
            envoi de <code className="text-zinc-300">try_unlock</code> avec le
            code ticket vendu à la caisse.
          </p>
          <TestClientPanel />
        </div>
      </main>
    </div>
  );
}
