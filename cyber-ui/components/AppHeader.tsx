'use client';

import Link from 'next/link';
import { CyberSwitcher } from '@/components/CyberSwitcher';
import { useAuth } from '@/lib/auth';

interface AppHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function AppHeader({ title, subtitle, children }: AppHeaderProps) {
  const { logout, isAdmin } = useAuth();

  return (
    <header className="border-b border-zinc-800 bg-zinc-900/80 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-zinc-500">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <CyberSwitcher />
          <Link
            href="/dashboard"
            className="text-sm text-zinc-400 underline hover:text-zinc-300"
          >
            Caisse
          </Link>
          <Link
            href="/settings"
            className="text-sm text-zinc-400 underline hover:text-zinc-300"
          >
            Paramètres
          </Link>
          <Link
            href="/tickets"
            className="text-sm text-emerald-400 underline hover:text-emerald-300"
          >
            Tickets
          </Link>
          {isAdmin && (
            <>
              <Link
                href="/cybers"
                className="text-sm text-sky-400 underline hover:text-sky-300"
              >
                Cybers
              </Link>
              <Link
                href="/staff"
                className="text-sm text-violet-400 underline hover:text-violet-300"
              >
                Employés
              </Link>
            </>
          )}
          <Link
            href="/test-client"
            className="text-sm text-amber-400 underline hover:text-amber-300"
          >
            Client test
          </Link>
          <button
            type="button"
            onClick={logout}
            className="text-sm text-red-400 underline hover:text-red-300"
          >
            Déconnexion
          </button>
          {children}
        </div>
      </div>
    </header>
  );
}
