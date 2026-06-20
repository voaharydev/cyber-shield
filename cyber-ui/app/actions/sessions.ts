'use server';

import {
  SourceMiseAJour,
  TypePaiement,
  prisma,
} from '@cyber-shield/db';
import {
  SessionDomainError,
  TicketDomainError,
  createTicketInTransaction,
  encaisserPostpaidSession,
  resetPoste,
  startPostpaidSession,
  stopPostpaidSession,
} from '@cyber-shield/domain';
import { getCurrentUser } from './auth';

function assertCyberAccess(user: NonNullable<Awaited<ReturnType<typeof getCurrentUser>>>, cyberId: string) {
  if (user.role !== 'ADMIN' && !user.cyberIds.includes(cyberId)) {
    throw new Error('Accès refusé à cet établissement');
  }
}

function mapError(error: unknown): never {
  if (error instanceof SessionDomainError || error instanceof TicketDomainError) {
    throw new Error(error.message);
  }
  throw error;
}

export async function createTicketAction(
  cyberId: string,
  input: {
    tempsInitial: number;
    typePaiement: TypePaiement;
    telephone?: string;
    echangePoints?: { type: 'MINUTES' | 'REDUCTION'; points: number };
  },
) {
  const user = await getCurrentUser();
  if (!user) throw new Error('Non authentifié');
  assertCyberAccess(user, cyberId);

  const cyber = await prisma.cyber.findUnique({ where: { id: cyberId } });
  if (!cyber) throw new Error('Cyber introuvable');

  const fideliteConfig = await prisma.fideliteConfig.findUnique({
    where: { id: 'default' },
  });

  let clientId: string | null = null;
  if (input.telephone?.trim()) {
    const client = await prisma.clientFidelite.findUnique({
      where: { telephone: input.telephone.trim() },
    });
    if (!client) {
      throw new Error(
        'Client fidélité introuvable — inscrivez le numéro avant la vente',
      );
    }
    if (!client.isActive) throw new Error('Client fidélité désactivé');
    clientId = client.id;
  }

  try {
    return await prisma.$transaction((tx) =>
      createTicketInTransaction(tx, {
        cyberId,
        employeId: user.id,
        tempsInitial: input.tempsInitial,
        typePaiement: input.typePaiement,
        prixParMinute: Number(cyber.prixParMinute),
        fideliteConfig: fideliteConfig ?? {
          pointsParMinuteAchat: 1,
          pointsPourMinuteGratuite: 10,
          pointsPour100Ar: 5,
          actif: true,
        },
        clientId,
        echangePoints: input.echangePoints,
      }),
    );
  } catch (error) {
    mapError(error);
  }
}

export async function startPostpaidSessionAction(
  cyberId: string,
  numeroPoste: number,
) {
  const user = await getCurrentUser();
  if (!user) throw new Error('Non authentifié');
  assertCyberAccess(user, cyberId);

  try {
    return await prisma.$transaction((tx) =>
      startPostpaidSession(tx, cyberId, numeroPoste, SourceMiseAJour.CLOUD),
    );
  } catch (error) {
    mapError(error);
  }
}

export async function stopPostpaidSessionAction(
  cyberId: string,
  numeroPoste: number,
) {
  const user = await getCurrentUser();
  if (!user) throw new Error('Non authentifié');
  assertCyberAccess(user, cyberId);

  try {
    return await prisma.$transaction((tx) =>
      stopPostpaidSession(tx, cyberId, numeroPoste, SourceMiseAJour.CLOUD),
    );
  } catch (error) {
    mapError(error);
  }
}

export async function encaisserPostpaidSessionAction(
  cyberId: string,
  numeroPoste: number,
  typePaiement: TypePaiement,
) {
  const user = await getCurrentUser();
  if (!user) throw new Error('Non authentifié');
  assertCyberAccess(user, cyberId);

  try {
    return await prisma.$transaction((tx) =>
      encaisserPostpaidSession(
        tx,
        cyberId,
        numeroPoste,
        user.id,
        typePaiement,
        SourceMiseAJour.CLOUD,
      ),
    );
  } catch (error) {
    mapError(error);
  }
}

export async function resetPosteAction(cyberId: string, numeroPoste: number) {
  const user = await getCurrentUser();
  if (!user) throw new Error('Non authentifié');
  assertCyberAccess(user, cyberId);

  try {
    return await prisma.$transaction((tx) =>
      resetPoste(tx, cyberId, numeroPoste, SourceMiseAJour.CLOUD),
    );
  } catch (error) {
    mapError(error);
  }
}
