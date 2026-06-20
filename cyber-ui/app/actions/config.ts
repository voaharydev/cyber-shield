'use server';

import { prisma } from '@cyber-shield/db';
import { getCurrentUser } from './auth';

export async function fetchConfigAction(cyberId: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error('Non authentifié');
  if (user.role !== 'ADMIN' && !user.cyberIds.includes(cyberId)) {
    throw new Error('Accès refusé');
  }

  const cyber = await prisma.cyber.findUnique({ where: { id: cyberId } });
  if (!cyber) throw new Error('Cyber introuvable');

  return {
    id: cyber.id,
    nom: cyber.nom,
    nombrePostes: cyber.nombrePostes,
    dureesTicket: cyber.dureesTicket,
    prixParMinute: Number(cyber.prixParMinute),
  };
}

export async function fetchCybersAction() {
  const user = await getCurrentUser();
  if (!user) throw new Error('Non authentifié');

  if (user.role === 'ADMIN') {
    const cybers = await prisma.cyber.findMany({
      where: { isActive: true, archivedAt: null },
      orderBy: { nom: 'asc' },
      select: { id: true, nom: true, nombrePostes: true, isActive: true },
    });
    return { cybers };
  }

  return {
    cybers: user.cybers.map((c) => ({
      id: c.id,
      nom: c.nom,
      nombrePostes: 0,
      isActive: true,
    })),
  };
}
