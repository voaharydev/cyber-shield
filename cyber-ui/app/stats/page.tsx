'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppHeader } from '@/components/AppHeader';
import { SalesStatsPanel } from '@/components/SalesStatsPanel';
import { useAuth } from '@/lib/auth';

export default function StatsPage() {
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
        title="Statistiques de ventes"
        subtitle="Tickets vendus et chiffre d'affaires par période"
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <SalesStatsPanel />
      </main>
    </div>
  );
}
