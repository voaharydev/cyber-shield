'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppHeader } from '@/components/AppHeader';
import { StaffCreateForm, StaffEditForm } from '@/components/StaffForm';
import { useAuth } from '@/lib/auth';
import {
  CyberSummary,
  deactivateStaff,
  fetchCybers,
  fetchStaff,
  StaffUser,
} from '@/lib/api';

export default function StaffPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();
  const [staffList, setStaffList] = useState<StaffUser[]>([]);
  const [cybers, setCybers] = useState<CyberSummary[]>([]);
  const [includeInactive, setIncludeInactive] = useState(false);
  const [editing, setEditing] = useState<StaffUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [staffRes, cybersRes] = await Promise.all([
        fetchStaff(includeInactive),
        fetchCybers(),
      ]);
      setStaffList(staffRes.staff);
      setCybers(cybersRes.cybers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de chargement');
    } finally {
      setLoading(false);
    }
  }, [includeInactive]);

  useEffect(() => {
    if (!isAdmin) {
      router.replace('/dashboard');
      return;
    }
    void load();
  }, [isAdmin, router, load]);

  async function handleDeactivate(id: string) {
    if (!confirm('Désactiver cet employé ?')) return;
    try {
      await deactivateStaff(id);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur');
    }
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <AppHeader
        title="Gestion des employés"
        subtitle="Créer, affecter et gérer les comptes staff"
      />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-2">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-zinc-300">
              Employés ({staffList.length})
            </h2>
            <label className="flex items-center gap-2 text-xs text-zinc-500">
              <input
                type="checkbox"
                checked={includeInactive}
                onChange={(e) => setIncludeInactive(e.target.checked)}
                className="rounded border-zinc-600"
              />
              Inclure inactifs
            </label>
          </div>

          {loading ? (
            <p className="text-zinc-500">Chargement...</p>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : staffList.length === 0 ? (
            <p className="text-zinc-500">Aucun employé.</p>
          ) : (
            <ul className="space-y-3">
              {staffList.map((member) => (
                <li
                  key={member.id}
                  className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-zinc-200">
                        {member.username}
                        {!member.isActive && (
                          <span className="ml-2 text-xs text-red-400">
                            (inactif)
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-sm text-zinc-400">
                        {member.cybers.map((c) => c.nom).join(', ') ||
                          'Aucun cyber'}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <button
                        type="button"
                        onClick={() => setEditing(member)}
                        className="text-xs text-emerald-400 underline hover:text-emerald-300"
                      >
                        Modifier
                      </button>
                      {member.isActive && (
                        <button
                          type="button"
                          onClick={() => void handleDeactivate(member.id)}
                          className="text-xs text-red-400 underline hover:text-red-300"
                        >
                          Désactiver
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          {editing ? (
            <>
              <h2 className="mb-4 text-lg font-medium text-zinc-300">
                Modifier l&apos;employé
              </h2>
              <StaffEditForm
                staff={editing}
                cybers={cybers}
                onSaved={(updated) => {
                  setStaffList((prev) =>
                    prev.map((s) => (s.id === updated.id ? updated : s)),
                  );
                  setEditing(null);
                }}
                onCancel={() => setEditing(null)}
              />
            </>
          ) : (
            <>
              <h2 className="mb-4 text-lg font-medium text-zinc-300">
                Nouvel employé
              </h2>
              <StaffCreateForm
                onCreated={(staff) => {
                  setStaffList((prev) => [...prev, staff].sort((a, b) =>
                    a.username.localeCompare(b.username),
                  ));
                }}
              />
            </>
          )}
        </section>
      </main>
    </div>
  );
}
