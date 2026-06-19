'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppHeader } from '@/components/AppHeader';
import { FideliteConfigForm } from '@/components/FideliteConfigForm';
import { useAuth } from '@/lib/auth';

export default function FidelitePage() {
  const { isAdmin } = useAuth();
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
        title="Fidélité réseau"
        subtitle="Programme commun à tous les établissements"
      />

      <main className="mx-auto max-w-2xl px-6 py-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <FideliteConfigForm />
        </div>
      </main>
    </div>
  );
}
