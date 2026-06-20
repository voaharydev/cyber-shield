import {
  SourceMiseAJour,
  StatutTicket,
  TypeMouvementFidelite,
  TypePaiement,
  type Prisma,
} from '@cyber-shield/db';
export { buildPosteStateFromRows } from '../ui/poste-state';

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

type Tx = Prisma.TransactionClient;

export class TicketDomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TicketDomainError';
  }
}

export type EchangePointsInput = {
  type: 'MINUTES' | 'REDUCTION';
  points: number;
};

export interface FideliteConfigLike {
  pointsParMinuteAchat: number;
  pointsPourMinuteGratuite: number;
  pointsPour100Ar: number;
  actif: boolean;
}

export interface VenteFidelitePlan {
  clientId: string | null;
  tempsInitialAchete: number;
  tempsInitialTicket: number;
  minutesBonus: number;
  montant: number;
  reductionAr: number;
  pointsGagnes: number;
  pointsUtilises: number;
  echangeType: TypeMouvementFidelite | null;
  caisseDescription: string;
}

export function generateTicketCode(): string {
  let suffix = '';
  for (let i = 0; i < 5; i++) {
    suffix += CODE_CHARS.charAt(Math.floor(Math.random() * CODE_CHARS.length));
  }
  return `TCK-${suffix}`;
}

export async function generateUniqueTicketCode(
  cyberId: string,
  tx: Tx,
): Promise<string> {
  for (let attempt = 0; attempt < 10; attempt++) {
    const codeUnique = generateTicketCode();
    const existing = await tx.ticket.findUnique({
      where: { cyberId_codeUnique: { cyberId, codeUnique } },
    });
    if (!existing) return codeUnique;
  }
  throw new TicketDomainError('Impossible de générer un code ticket unique');
}

export function computeVentePlan(
  config: FideliteConfigLike,
  tempsInitialAchete: number,
  prixParMinute: number,
  clientId: string | null,
  echangePoints?: EchangePointsInput,
): Omit<VenteFidelitePlan, 'clientId' | 'caisseDescription'> & {
  caisseDescriptionParts: string[];
} {
  const brutMontant = tempsInitialAchete * prixParMinute;
  let minutesBonus = 0;
  let reductionAr = 0;
  let pointsUtilises = 0;
  let pointsGagnes = 0;
  let echangeType: TypeMouvementFidelite | null = null;
  const caisseDescriptionParts: string[] = [];

  let montant = brutMontant;
  let tempsInitialTicket = tempsInitialAchete;

  if (clientId && config.actif) {
    pointsGagnes = tempsInitialAchete * config.pointsParMinuteAchat;

    if (echangePoints && echangePoints.points > 0) {
      pointsUtilises = echangePoints.points;

      if (echangePoints.type === 'MINUTES') {
        minutesBonus = Math.floor(
          pointsUtilises / config.pointsPourMinuteGratuite,
        );
        if (minutesBonus <= 0) {
          throw new TicketDomainError(
            `Points insuffisants pour des minutes gratuites (min ${config.pointsPourMinuteGratuite} pts)`,
          );
        }
        const effectivePoints = minutesBonus * config.pointsPourMinuteGratuite;
        if (effectivePoints !== pointsUtilises) {
          throw new TicketDomainError(
            `Les points doivent être un multiple de ${config.pointsPourMinuteGratuite} pour l'échange minutes`,
          );
        }
        tempsInitialTicket = tempsInitialAchete + minutesBonus;
        echangeType = TypeMouvementFidelite.ECHANGE_MINUTES;
        caisseDescriptionParts.push(
          `Fidélité: +${pointsGagnes} pts, -${pointsUtilises} pts → ${minutesBonus} min bonus`,
        );
      } else if (echangePoints.type === 'REDUCTION') {
        const units = Math.floor(pointsUtilises / config.pointsPour100Ar);
        if (units <= 0) {
          throw new TicketDomainError(
            `Points insuffisants pour une réduction (min ${config.pointsPour100Ar} pts)`,
          );
        }
        const effectivePoints = units * config.pointsPour100Ar;
        if (effectivePoints !== pointsUtilises) {
          throw new TicketDomainError(
            `Les points doivent être un multiple de ${config.pointsPour100Ar} pour la réduction Ar`,
          );
        }
        reductionAr = units * 100;
        montant = Math.max(0, brutMontant - reductionAr);
        echangeType = TypeMouvementFidelite.ECHANGE_REDUCTION;
        caisseDescriptionParts.push(
          `Fidélité: +${pointsGagnes} pts, -${pointsUtilises} pts → -${reductionAr} Ar`,
        );
      }
    } else if (pointsGagnes > 0) {
      caisseDescriptionParts.push(`Fidélité: +${pointsGagnes} pts`);
    }
  }

  return {
    tempsInitialAchete,
    tempsInitialTicket,
    minutesBonus,
    montant,
    reductionAr,
    pointsGagnes,
    pointsUtilises,
    echangeType,
    caisseDescriptionParts,
  };
}

export async function getSoldePoints(clientId: string, tx: Tx): Promise<number> {
  const result = await tx.mouvementFidelite.aggregate({
    where: { clientId },
    _sum: { points: true },
  });
  return result._sum.points ?? 0;
}

export async function applyFideliteMouvements(
  tx: Tx,
  params: {
    cyberId: string;
    clientId: string;
    employeId: string;
    ticketId: string;
    pointsGagnes: number;
    pointsUtilises: number;
    echangeType: TypeMouvementFidelite | null;
    minutesBonus: number;
    reductionAr: number;
  },
) {
  const solde = await getSoldePoints(params.clientId, tx);
  if (params.pointsUtilises > 0 && solde < params.pointsUtilises) {
    throw new TicketDomainError('Solde fidélité insuffisant');
  }

  if (params.pointsUtilises > 0 && params.echangeType) {
    const spendDesc =
      params.echangeType === TypeMouvementFidelite.ECHANGE_MINUTES
        ? `Échange ${params.pointsUtilises} pts → ${params.minutesBonus} min bonus`
        : `Échange ${params.pointsUtilises} pts → -${params.reductionAr} Ar`;

    await tx.mouvementFidelite.create({
      data: {
        cyberId: params.cyberId,
        clientId: params.clientId,
        type: params.echangeType,
        points: -params.pointsUtilises,
        ticketId: params.ticketId,
        employeId: params.employeId,
        description: spendDesc,
      },
    });
  }

  if (params.pointsGagnes > 0) {
    await tx.mouvementFidelite.create({
      data: {
        cyberId: params.cyberId,
        clientId: params.clientId,
        type: TypeMouvementFidelite.GAIN_ACHAT,
        points: params.pointsGagnes,
        ticketId: params.ticketId,
        employeId: params.employeId,
        description: `Gain achat ${params.pointsGagnes} pts`,
      },
    });
  }
}

export interface CreateTicketInput {
  cyberId: string;
  employeId: string;
  tempsInitial: number;
  typePaiement: TypePaiement;
  prixParMinute: number;
  fideliteConfig: FideliteConfigLike;
  clientId?: string | null;
  echangePoints?: EchangePointsInput;
}

export async function createTicketInTransaction(
  tx: Tx,
  input: CreateTicketInput,
) {
  const planCore = computeVentePlan(
    input.fideliteConfig,
    input.tempsInitial,
    input.prixParMinute,
    input.clientId ?? null,
    input.echangePoints,
  );

  if (input.clientId && planCore.pointsUtilises > 0) {
    const solde = await getSoldePoints(input.clientId, tx);
    if (solde < planCore.pointsUtilises) {
      throw new TicketDomainError(
        `Solde insuffisant (${solde} pts disponibles)`,
      );
    }
  }

  const baseDesc = `Vente ticket ${input.tempsInitial} min @ ${input.prixParMinute} Ar/min`;
  const caisseDescription =
    planCore.caisseDescriptionParts.length > 0
      ? `${baseDesc} | ${planCore.caisseDescriptionParts.join(' | ')}`
      : baseDesc;

  await tx.transactionCaisse.create({
    data: {
      cyberId: input.cyberId,
      montant: planCore.montant,
      typePaiement: input.typePaiement,
      description: caisseDescription,
      employeId: input.employeId,
    },
  });

  const codeUnique = await generateUniqueTicketCode(input.cyberId, tx);

  const ticket = await tx.ticket.create({
    data: {
      cyberId: input.cyberId,
      codeUnique,
      tempsInitial: planCore.tempsInitialTicket,
      tempsRestant: planCore.tempsInitialTicket,
      statut: StatutTicket.VALIDE,
      creeParId: input.employeId,
      clientFideliteId: input.clientId ?? null,
      pointsGagnes: planCore.pointsGagnes > 0 ? planCore.pointsGagnes : null,
      pointsUtilises:
        planCore.pointsUtilises > 0 ? planCore.pointsUtilises : null,
      minutesBonus: planCore.minutesBonus,
      reductionAr: planCore.reductionAr > 0 ? planCore.reductionAr : null,
    },
  });

  if (
    input.clientId &&
    (planCore.pointsGagnes > 0 || planCore.pointsUtilises > 0)
  ) {
    await applyFideliteMouvements(tx, {
      cyberId: input.cyberId,
      clientId: input.clientId,
      employeId: input.employeId,
      ticketId: ticket.id,
      pointsGagnes: planCore.pointsGagnes,
      pointsUtilises: planCore.pointsUtilises,
      echangeType: planCore.echangeType,
      minutesBonus: planCore.minutesBonus,
      reductionAr: planCore.reductionAr,
    });
  }

  return {
    ticket: {
      id: ticket.id,
      codeUnique: ticket.codeUnique,
      tempsInitial: ticket.tempsInitial,
      tempsRestant: ticket.tempsRestant,
      statut: ticket.statut,
      minutesBonus: ticket.minutesBonus,
      reductionAr: planCore.reductionAr,
      pointsGagnes: planCore.pointsGagnes,
      pointsUtilises: planCore.pointsUtilises,
      montantEncaisse: planCore.montant,
    },
  };
}

