'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold tracking-tight">CyberControl</h1>
      <p className="text-zinc-400">Système de gestion cybercafé Zero Trust</p>
      {!loading && (
        <Link
          href={user ? '/dashboard' : '/login'}
          className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-500"
        >
          {user ? 'Ouvrir la caisse' : 'Se connecter'}
        </Link>
      )}
    </main>
  );
}
