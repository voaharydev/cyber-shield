'use client';

import { AppHeader } from '@/components/AppHeader';
import { ConfigForm } from '@/components/ConfigForm';
import { useConfig } from '@/lib/use-config';
import { useCyber } from '@/lib/cyber-context';

export default function SettingsPage() {
  const { activeCyberId } = useCyber();
  const { config, loading, error, setConfig } = useConfig();

  return (
    <div className="min-h-screen">
      <AppHeader
        title="Paramètres"
        subtitle="Configuration de l'établissement actif"
      />

      <main className="mx-auto max-w-2xl px-6 py-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          {!activeCyberId ? (
            <p className="text-amber-400">Aucun établissement sélectionné.</p>
          ) : loading ? (
            <p className="text-zinc-500">Chargement...</p>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            <ConfigForm
              initialConfig={config}
              onSaved={(updated) => setConfig(updated)}
            />
          )}
        </div>
      </main>
    </div>
  );
}
