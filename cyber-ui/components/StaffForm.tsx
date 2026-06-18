'use client';

import { useEffect, useState } from 'react';
import {
  createStaff,
  CyberSummary,
  fetchCybers,
  StaffUser,
  updateStaff,
} from '@/lib/api';

interface StaffCreateFormProps {
  onCreated: (staff: StaffUser) => void;
}

export function StaffCreateForm({ onCreated }: StaffCreateFormProps) {
  const [cybers, setCybers] = useState<CyberSummary[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCyberIds, setSelectedCyberIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void fetchCybers()
      .then(({ cybers: list }) => setCybers(list))
      .catch(() => setError('Impossible de charger les cybers'));
  }, []);

  function toggleCyber(id: string) {
    setSelectedCyberIds((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (selectedCyberIds.length === 0) {
      setError('Sélectionnez au moins un établissement');
      return;
    }

    setLoading(true);
    try {
      const { staff } = await createStaff({
        username: username.trim(),
        password,
        cyberIds: selectedCyberIds,
      });
      onCreated(staff);
      setUsername('');
      setPassword('');
      setSelectedCyberIds([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de création');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="staff-username" className="mb-1 block text-sm text-zinc-400">
          Identifiant
        </label>
        <input
          id="staff-username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="staff-password" className="mb-1 block text-sm text-zinc-400">
          Mot de passe
        </label>
        <input
          id="staff-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
        />
      </div>

      <div>
        <span className="mb-2 block text-sm text-zinc-400">
          Établissements assignés
        </span>
        <div className="space-y-2 rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
          {cybers.length === 0 ? (
            <p className="text-sm text-zinc-500">Aucun cyber disponible</p>
          ) : (
            cybers.map((cyber) => (
              <label
                key={cyber.id}
                className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300"
              >
                <input
                  type="checkbox"
                  checked={selectedCyberIds.includes(cyber.id)}
                  onChange={() => toggleCyber(cyber.id)}
                  className="rounded border-zinc-600"
                />
                {cyber.nom}
              </label>
            ))
          )}
        </div>
      </div>

      {error && (
        <p className="rounded-lg bg-red-950/50 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-emerald-600 py-3 font-medium text-white transition hover:bg-emerald-500 disabled:opacity-50"
      >
        {loading ? 'Création...' : 'Créer l\'employé'}
      </button>
    </form>
  );
}

interface StaffEditFormProps {
  staff: StaffUser;
  cybers: CyberSummary[];
  onSaved: (staff: StaffUser) => void;
  onCancel: () => void;
}

export function StaffEditForm({
  staff,
  cybers,
  onSaved,
  onCancel,
}: StaffEditFormProps) {
  const [password, setPassword] = useState('');
  const [selectedCyberIds, setSelectedCyberIds] = useState<string[]>(
    staff.cyberIds,
  );
  const [isActive, setIsActive] = useState(staff.isActive);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggleCyber(id: string) {
    setSelectedCyberIds((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (selectedCyberIds.length === 0) {
      setError('Au moins un établissement requis');
      return;
    }

    setLoading(true);
    try {
      const dto: {
        cyberIds: string[];
        isActive: boolean;
        password?: string;
      } = { cyberIds: selectedCyberIds, isActive };
      if (password.trim()) {
        dto.password = password;
      }
      const { staff: updated } = await updateStaff(staff.id, dto);
      onSaved(updated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de mise à jour');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="font-medium text-zinc-200">{staff.username}</p>

      <div>
        <label htmlFor="edit-password" className="mb-1 block text-sm text-zinc-400">
          Nouveau mot de passe (optionnel)
        </label>
        <input
          id="edit-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          placeholder="Laisser vide pour ne pas changer"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
        />
      </div>

      <div>
        <span className="mb-2 block text-sm text-zinc-400">Établissements</span>
        <div className="space-y-2 rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
          {cybers.map((cyber) => (
            <label
              key={cyber.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300"
            >
              <input
                type="checkbox"
                checked={selectedCyberIds.includes(cyber.id)}
                onChange={() => toggleCyber(cyber.id)}
                className="rounded border-zinc-600"
              />
              {cyber.nom}
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-zinc-300">
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          className="rounded border-zinc-600"
        />
        Compte actif
      </label>

      {error && (
        <p className="rounded-lg bg-red-950/50 px-3 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-lg border border-zinc-700 py-2 text-zinc-300 hover:bg-zinc-800"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-lg bg-emerald-600 py-2 font-medium text-white hover:bg-emerald-500 disabled:opacity-50"
        >
          {loading ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>
    </form>
  );
}
