import {
  SourceMiseAJour,
  StatutPoste,
  StatutTicket,
  TypePaiement,
  TypeSession,
  type Prisma,
} from '@cyber-shield/db';
import {
  computeElapsedMinutes,
  computeMontantFromMinutes,
  toHourlyRate,
} from './billing';

type Tx = Prisma.TransactionClient;

export class SessionDomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SessionDomainError';
  }
}

async function getSessionOrThrow(tx: Tx, cyberId: string, numeroPoste: number) {
  const session = await tx.sessionOrdinateur.findUnique({
    where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
  });
  if (!session) {
    throw new SessionDomainError(`Poste ${numeroPoste} introuvable`);
  }
  return session;
}

export async function startPostpaidSession(
  tx: Tx,
  cyberId: string,
  numeroPoste: number,
  source: SourceMiseAJour,
) {
  const session = await getSessionOrThrow(tx, cyberId, numeroPoste);

  if (session.statut === StatutPoste.A_PAYER) {
    throw new SessionDomainError(
      'Poste en attente de paiement — encaissez avant réutilisation',
    );
  }
  if (session.statut === StatutPoste.EN_COURS) {
    throw new SessionDomainError("Poste déjà en cours d'utilisation");
  }

  const cyber = await tx.cyber.findUnique({ where: { id: cyberId } });
  if (!cyber) {
    throw new SessionDomainError('Cyber introuvable');
  }

  await tx.sessionOrdinateur.update({
    where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
    data: {
      statut: StatutPoste.EN_COURS,
      typeSession: TypeSession.POSTPAID,
      baseTarifHoraire: toHourlyRate(cyber.prixParMinute),
      tempsDebut: new Date(),
      tempsFin: null,
      montantDu: null,
      ticketActuelId: null,
      sourceMiseAJour: source,
    },
  });

  return { success: true, numeroPoste, typeSession: TypeSession.POSTPAID };
}

export async function stopPostpaidSession(
  tx: Tx,
  cyberId: string,
  numeroPoste: number,
  source: SourceMiseAJour,
) {
  const session = await getSessionOrThrow(tx, cyberId, numeroPoste);

  if (
    session.statut !== StatutPoste.EN_COURS ||
    session.typeSession !== TypeSession.POSTPAID ||
    !session.tempsDebut
  ) {
    throw new SessionDomainError('Aucune session libre active sur ce poste');
  }

  const tempsFin = new Date();
  const elapsedMinutes = computeElapsedMinutes(session.tempsDebut, tempsFin);
  const hourly = Number(session.baseTarifHoraire);
  const montantDu = computeMontantFromMinutes(hourly, elapsedMinutes);

  await tx.sessionOrdinateur.update({
    where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
    data: {
      statut: StatutPoste.A_PAYER,
      tempsFin,
      montantDu,
      sourceMiseAJour: source,
    },
  });

  return {
    success: true,
    numeroPoste,
    statut: StatutPoste.A_PAYER,
    elapsedMinutes,
    montantDu,
  };
}

export async function encaisserPostpaidSession(
  tx: Tx,
  cyberId: string,
  numeroPoste: number,
  employeId: string,
  typePaiement: TypePaiement,
  source: SourceMiseAJour,
) {
  const session = await getSessionOrThrow(tx, cyberId, numeroPoste);

  if (session.statut !== StatutPoste.A_PAYER) {
    throw new SessionDomainError("Ce poste n'est pas en attente de paiement");
  }
  if (!session.montantDu || Number(session.montantDu) <= 0) {
    throw new SessionDomainError('Montant dû invalide');
  }

  const montant = Number(session.montantDu);
  const hourly = Number(session.baseTarifHoraire);
  const elapsedMinutes =
    session.tempsDebut && session.tempsFin
      ? computeElapsedMinutes(session.tempsDebut, session.tempsFin)
      : 0;

  await tx.transactionCaisse.create({
    data: {
      cyberId,
      montant,
      typePaiement,
      description: `Session libre poste ${numeroPoste} — ${elapsedMinutes} min @ ${hourly} Ar/h`,
      employeId,
    },
  });

  await tx.sessionOrdinateur.update({
    where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
    data: {
      statut: StatutPoste.VERROUILLE,
      typeSession: null,
      ticketActuelId: null,
      baseTarifHoraire: 2,
      tempsDebut: null,
      tempsFin: null,
      montantDu: null,
      sourceMiseAJour: source,
    },
  });

  return { success: true, numeroPoste, montantEncaisse: montant };
}

export async function resetPoste(
  tx: Tx,
  cyberId: string,
  numeroPoste: number,
  source: SourceMiseAJour,
) {
  const session = await tx.sessionOrdinateur.findUnique({
    where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
    include: { ticketActuel: true },
  });
  if (!session) {
    throw new SessionDomainError(`Poste ${numeroPoste} introuvable`);
  }

  if (session.statut === StatutPoste.A_PAYER) {
    throw new SessionDomainError('Encaissez avant réinitialisation');
  }

  if (
    session.statut === StatutPoste.EN_COURS &&
    session.typeSession === TypeSession.POSTPAID
  ) {
    const result = await stopPostpaidSession(tx, cyberId, numeroPoste, source);
    return {
      success: true,
      numeroPoste,
      action: 'postpaid_stopped' as const,
      montantDu: result.montantDu,
    };
  }

  if (
    session.statut === StatutPoste.EN_COURS &&
    session.typeSession === TypeSession.PREPAID &&
    session.ticketActuelId &&
    session.ticketActuel
  ) {
    await tx.ticket.update({
      where: { id: session.ticketActuelId },
      data: { statut: StatutTicket.VALIDE },
    });

    await tx.sessionOrdinateur.update({
      where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
      data: {
        statut: StatutPoste.VERROUILLE,
        typeSession: null,
        ticketActuelId: null,
        tempsDebut: null,
        tempsFin: null,
        montantDu: null,
        sourceMiseAJour: source,
      },
    });

    return {
      success: true,
      numeroPoste,
      action: 'prepaid_restored' as const,
      ticketCode: session.ticketActuel.codeUnique,
    };
  }

  return { success: true, numeroPoste, action: 'kicked' as const };
}
