'use server';

import { prisma } from '@cyber-shield/db';
import { createClient } from '@/lib/supabase/server';

export type AuthUser = {
  id: string;
  username: string;
  role: 'ADMIN' | 'STAFF';
  isActive: boolean;
  cyberIds: string[];
  cybers: { id: string; nom: string }[];
};

export async function getCurrentUser(): Promise<AuthUser | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const appMeta = user.app_metadata ?? {};
  const userId = appMeta.userId as string | undefined;

  if (!userId) return null;

  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      cybers: {
        include: {
          cyber: {
            select: { id: true, nom: true, isActive: true, archivedAt: true },
          },
        },
      },
    },
  });

  if (!dbUser || !dbUser.isActive) return null;

  const cybers = dbUser.cybers
    .filter((uc) => uc.cyber.isActive && uc.cyber.archivedAt === null)
    .map((uc) => ({ id: uc.cyber.id, nom: uc.cyber.nom }));

  return {
    id: dbUser.id,
    username: dbUser.username,
    role: dbUser.role,
    isActive: dbUser.isActive,
    cyberIds: cybers.map((c) => c.id),
    cybers,
  };
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}
