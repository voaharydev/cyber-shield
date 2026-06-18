import {
  PrismaClient,
  Role,
  StatutPoste,
  StatutTicket,
  TypePaiement,
} from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

const DEFAULT_DUREES = [30, 60, 90, 120];
const LEGACY_CYBER_ID = 'cyber_legacy_default';
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const CHUNK_SIZE = 500;
const DAYS_CURRENT = 90;
const DAYS_PREVIOUS = 90;
const ACTIVE_PER_CYBER = 3;

const DEMO_CYBERS = [
  {
    id: LEGACY_CYBER_ID,
    nom: 'CyberControl',
    nombrePostes: 12,
    prixParMinute: 100,
  },
  {
    id: 'cyber_demo_nord',
    nom: 'Cyber Nord',
    nombrePostes: 8,
    prixParMinute: 80,
  },
  {
    id: 'cyber_demo_sud',
    nom: 'Cyber Sud',
    nombrePostes: 16,
    prixParMinute: 120,
  },
] as const;

const DEMO_STAFF: { username: string; cyberIds: string[] }[] = [
  { username: 'staff_nord', cyberIds: ['cyber_demo_nord'] },
  { username: 'staff_sud', cyberIds: ['cyber_demo_sud'] },
  { username: 'staff_multi', cyberIds: ['cyber_demo_nord', 'cyber_demo_sud'] },
];

const PRESERVED_USERS = ['admin', 'staff'];

interface CyberContext {
  id: string;
  nom: string;
  nombrePostes: number;
  prixParMinute: number;
  employeIds: string[];
}

interface TicketSeed {
  id: string;
  cyberId: string;
  codeUnique: string;
  tempsInitial: number;
  tempsRestant: number;
  statut: StatutTicket;
  creeParId: string;
  createdAt: Date;
  montant: number;
  typePaiement: TypePaiement;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function pickPaymentType(): TypePaiement {
  const roll = Math.random();
  if (roll < 0.6) return TypePaiement.ESPECES;
  if (roll < 0.9) return TypePaiement.MOBILE_MONEY;
  return TypePaiement.CARTE;
}

function generateCode(usedCodes: Set<string>, cyberId: string): string {
  for (let attempt = 0; attempt < 20; attempt++) {
    let suffix = '';
    for (let i = 0; i < 5; i++) {
      suffix += CODE_CHARS.charAt(
        Math.floor(Math.random() * CODE_CHARS.length),
      );
    }
    const code = `TCK-${suffix}`;
    const key = `${cyberId}:${code}`;
    if (!usedCodes.has(key)) {
      usedCodes.add(key);
      return code;
    }
  }
  throw new Error(`Impossible de générer un code unique pour ${cyberId}`);
}

function dayAt(daysAgo: number, hour?: number): Date {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - daysAgo);
  date.setUTCHours(hour ?? randomInt(8, 22), randomInt(0, 59), 0, 0);
  return date;
}

function shiftYears(date: Date, years: number): Date {
  const shifted = new Date(date);
  shifted.setUTCFullYear(shifted.getUTCFullYear() + years);
  return shifted;
}

function assertSafeEnvironment(): void {
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.DEMO_SEED_CONFIRM !== 'true'
  ) {
    console.error(
      'Refusé en production. Définir DEMO_SEED_CONFIRM=true pour forcer.',
    );
    process.exit(1);
  }
}

async function resetDemoData(): Promise<void> {
  await prisma.$transaction(async (tx) => {
    await tx.sessionOrdinateur.updateMany({
      data: { ticketActuelId: null, statut: StatutPoste.VERROUILLE },
    });
    await tx.transactionCaisse.deleteMany({});
    await tx.ticket.deleteMany({});
    await tx.sessionOrdinateur.deleteMany({
      where: { cyberId: { not: LEGACY_CYBER_ID } },
    });
    await tx.userCyber.deleteMany({
      where: { user: { username: { notIn: PRESERVED_USERS } } },
    });
    await tx.user.deleteMany({
      where: { username: { notIn: PRESERVED_USERS } },
    });
    await tx.cyber.deleteMany({
      where: { id: { not: LEGACY_CYBER_ID } },
    });
  });
  console.log('Reset: tickets, transactions, cybers démo et staff démo supprimés');
}

async function seedBaseAccounts(): Promise<{
  adminId: string;
  staffId: string;
}> {
  const adminHash = await bcrypt.hash('admin123', 10);
  const staffHash = await bcrypt.hash('staff123', 10);

  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: { role: Role.ADMIN, isActive: true },
    create: {
      username: 'admin',
      passwordHash: adminHash,
      role: Role.ADMIN,
      isActive: true,
    },
  });

  const staff = await prisma.user.upsert({
    where: { username: 'staff' },
    update: { role: Role.STAFF, isActive: true },
    create: {
      username: 'staff',
      passwordHash: staffHash,
      role: Role.STAFF,
      isActive: true,
    },
  });

  return { adminId: admin.id, staffId: staff.id };
}

async function seedCybersAndStaff(staffId: string): Promise<CyberContext[]> {
  const staffHash = await bcrypt.hash('staff123', 10);
  const contexts: CyberContext[] = [];

  for (const def of DEMO_CYBERS) {
    const cyber = await prisma.cyber.upsert({
      where: { id: def.id },
      update: {
        nom: def.nom,
        nombrePostes: def.nombrePostes,
        prixParMinute: def.prixParMinute,
        dureesTicket: DEFAULT_DUREES,
      },
      create: {
        id: def.id,
        nom: def.nom,
        nombrePostes: def.nombrePostes,
        dureesTicket: DEFAULT_DUREES,
        prixParMinute: def.prixParMinute,
      },
    });

    for (let poste = 1; poste <= cyber.nombrePostes; poste++) {
      await prisma.sessionOrdinateur.upsert({
        where: {
          cyberId_numeroPoste: { cyberId: cyber.id, numeroPoste: poste },
        },
        update: { statut: StatutPoste.VERROUILLE, ticketActuelId: null },
        create: {
          cyberId: cyber.id,
          numeroPoste: poste,
          statut: StatutPoste.VERROUILLE,
        },
      });
    }

    const employeIds: string[] = [];

    if (def.id === LEGACY_CYBER_ID) {
      await prisma.userCyber.upsert({
        where: {
          userId_cyberId: { userId: staffId, cyberId: cyber.id },
        },
        update: {},
        create: { userId: staffId, cyberId: cyber.id },
      });
      employeIds.push(staffId);
    }

    for (const staffDef of DEMO_STAFF) {
      if (!staffDef.cyberIds.includes(def.id)) continue;

      const user = await prisma.user.upsert({
        where: { username: staffDef.username },
        update: { role: Role.STAFF, isActive: true },
        create: {
          username: staffDef.username,
          passwordHash: staffHash,
          role: Role.STAFF,
          isActive: true,
        },
      });

      await prisma.userCyber.upsert({
        where: {
          userId_cyberId: { userId: user.id, cyberId: cyber.id },
        },
        update: {},
        create: { userId: user.id, cyberId: cyber.id },
      });

      employeIds.push(user.id);
    }

    contexts.push({
      id: cyber.id,
      nom: cyber.nom,
      nombrePostes: cyber.nombrePostes,
      prixParMinute: Number(cyber.prixParMinute),
      employeIds,
    });
  }

  return contexts;
}

function buildTicketsForPeriod(
  contexts: CyberContext[],
  daysAgoStart: number,
  daysAgoEnd: number,
  ticketsPerDayMin: number,
  ticketsPerDayMax: number,
  usedCodes: Set<string>,
  yearOffset: number,
): { tickets: TicketSeed[]; activeCandidates: TicketSeed[] } {
  const tickets: TicketSeed[] = [];
  const activeCandidates: TicketSeed[] = [];

  for (const ctx of contexts) {
    for (let daysAgo = daysAgoStart; daysAgo >= daysAgoEnd; daysAgo--) {
      const count = randomInt(ticketsPerDayMin, ticketsPerDayMax);
      const baseDate = dayAt(daysAgo);
      const createdAt =
        yearOffset === 0 ? baseDate : shiftYears(baseDate, yearOffset);

      for (let i = 0; i < count; i++) {
        const tempsInitial = pickRandom(DEFAULT_DUREES);
        const montant = ctx.prixParMinute * tempsInitial;
        const isRecent = daysAgo <= 7 && yearOffset === 0;

        let statut: StatutTicket = StatutTicket.EXPIRE;
        let tempsRestant = 0;

        if (isRecent) {
          const reserveForActive =
            activeCandidates.filter((t) => t.cyberId === ctx.id).length <
            ACTIVE_PER_CYBER;

          if (reserveForActive) {
            statut = StatutTicket.VALIDE;
            tempsRestant = tempsInitial;
          } else if (Math.random() < 0.25) {
            statut = StatutTicket.VALIDE;
            tempsRestant = tempsInitial;
          } else {
            statut = StatutTicket.EXPIRE;
            tempsRestant = 0;
          }
        }

        const ticket: TicketSeed = {
          id: randomUUID(),
          cyberId: ctx.id,
          codeUnique: generateCode(usedCodes, ctx.id),
          tempsInitial,
          tempsRestant,
          statut,
          creeParId: pickRandom(ctx.employeIds),
          createdAt,
          montant,
          typePaiement: pickPaymentType(),
        };

        tickets.push(ticket);

        if (
          isRecent &&
          statut === StatutTicket.VALIDE &&
          activeCandidates.filter((t) => t.cyberId === ctx.id).length <
            ACTIVE_PER_CYBER
        ) {
          activeCandidates.push(ticket);
        }
      }
    }
  }

  return { tickets, activeCandidates };
}

async function insertTicketsInChunks(tickets: TicketSeed[]): Promise<void> {
  for (let i = 0; i < tickets.length; i += CHUNK_SIZE) {
    const chunk = tickets.slice(i, i + CHUNK_SIZE);
    await prisma.ticket.createMany({
      data: chunk.map((t) => ({
        id: t.id,
        cyberId: t.cyberId,
        codeUnique: t.codeUnique,
        tempsInitial: t.tempsInitial,
        tempsRestant: t.tempsRestant,
        statut: t.statut,
        creeParId: t.creeParId,
        createdAt: t.createdAt,
      })),
    });
  }
}

async function insertTransactionsInChunks(tickets: TicketSeed[]): Promise<void> {
  for (let i = 0; i < tickets.length; i += CHUNK_SIZE) {
    const chunk = tickets.slice(i, i + CHUNK_SIZE);
    await prisma.transactionCaisse.createMany({
      data: chunk.map((t) => ({
        cyberId: t.cyberId,
        montant: t.montant,
        typePaiement: t.typePaiement,
        description: `Vente ticket ${t.tempsInitial} min @ ${t.montant / t.tempsInitial} Ar/min`,
        dateTransaction: t.createdAt,
        employeId: t.creeParId,
      })),
    });
  }
}

async function linkActiveTickets(
  activeCandidates: TicketSeed[],
): Promise<number> {
  let linked = 0;

  for (const ctx of DEMO_CYBERS) {
    const candidates = activeCandidates
      .filter((t) => t.cyberId === ctx.id)
      .slice(0, ACTIVE_PER_CYBER);

    for (let i = 0; i < candidates.length; i++) {
      const ticket = candidates[i];
      const poste = i + 1;
      const tempsRestant = randomInt(
        5,
        Math.max(5, Math.floor(ticket.tempsInitial * 0.8)),
      );

      await prisma.ticket.update({
        where: { id: ticket.id },
        data: { statut: StatutTicket.ACTIVE, tempsRestant },
      });

      await prisma.sessionOrdinateur.update({
        where: {
          cyberId_numeroPoste: { cyberId: ctx.id, numeroPoste: poste },
        },
        data: {
          statut: StatutPoste.EN_COURS,
          ticketActuelId: ticket.id,
        },
      });

      linked++;
    }
  }

  return linked;
}

async function printSummary(
  contexts: CyberContext[],
  totalTickets: number,
  activeLinked: number,
): Promise<void> {
  const byCyber = await prisma.ticket.groupBy({
    by: ['cyberId', 'statut'],
    _count: { id: true },
  });

  const txCount = await prisma.transactionCaisse.count();

  console.log('\n--- Résumé seed démo ---');
  console.log(`Tickets créés: ${totalTickets}`);
  console.log(`Transactions créées: ${txCount}`);
  console.log(`Tickets ACTIVE liés à un poste: ${activeLinked}`);
  console.log('\nRépartition par cyber / statut:');

  for (const ctx of contexts) {
    const rows = byCyber.filter((r) => r.cyberId === ctx.id);
    const parts = rows
      .map((r) => `${r.statut}=${r._count.id}`)
      .join(', ');
    console.log(`  ${ctx.nom} (${ctx.id}): ${parts || 'aucun'}`);
  }

  console.log('\nComptes:');
  console.log('  admin / admin123 (ADMIN)');
  console.log('  staff / staff123 (STAFF — CyberControl)');
  console.log('  staff_nord / staff123 (STAFF — Cyber Nord)');
  console.log('  staff_sud / staff123 (STAFF — Cyber Sud)');
  console.log('  staff_multi / staff123 (STAFF — Nord + Sud)');
}

async function main() {
  assertSafeEnvironment();

  console.log('Phase 1: reset des données de démo...');
  await resetDemoData();

  console.log('Phase 2: comptes de base...');
  const { staffId } = await seedBaseAccounts();

  console.log('Phase 3: cybers, postes et staff...');
  const contexts = await seedCybersAndStaff(staffId);

  console.log('Phase 4: génération tickets + transactions...');
  const usedCodes = new Set<string>();

  const current = buildTicketsForPeriod(
    contexts,
    DAYS_CURRENT,
    0,
    15,
    25,
    usedCodes,
    0,
  );

  const previous = buildTicketsForPeriod(
    contexts,
    DAYS_PREVIOUS,
    0,
    8,
    15,
    usedCodes,
    -1,
  );

  const allTickets = [...current.tickets, ...previous.tickets];

  await insertTicketsInChunks(allTickets);
  await insertTransactionsInChunks(allTickets);

  console.log('Phase 5: liaison tickets ACTIVE...');
  const activeLinked = await linkActiveTickets(current.activeCandidates);

  await printSummary(contexts, allTickets.length, activeLinked);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
