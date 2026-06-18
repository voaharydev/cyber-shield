import { PrismaClient, Role, StatutPoste } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const DEFAULT_DUREES = [30, 60, 90, 120];
const LEGACY_CYBER_ID = 'cyber_legacy_default';

async function main() {
  const adminHash = await bcrypt.hash('admin123', 10);
  const staffHash = await bcrypt.hash('staff123', 10);

  const cyber = await prisma.cyber.upsert({
    where: { id: LEGACY_CYBER_ID },
    update: {},
    create: {
      id: LEGACY_CYBER_ID,
      nom: 'CyberControl',
      nombrePostes: 12,
      dureesTicket: DEFAULT_DUREES,
      prixParMinute: 100,
    },
  });

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

  await prisma.userCyber.upsert({
    where: {
      userId_cyberId: { userId: staff.id, cyberId: cyber.id },
    },
    update: {},
    create: { userId: staff.id, cyberId: cyber.id },
  });

  console.log(`Seeded cyber: ${cyber.nom} (id: ${cyber.id})`);
  console.log(`Seeded admin: ${admin.username} / admin123`);
  console.log(`Seeded staff: ${staff.username} / staff123 (cyber: ${cyber.id})`);

  for (let poste = 1; poste <= cyber.nombrePostes; poste++) {
    await prisma.sessionOrdinateur.upsert({
      where: {
        cyberId_numeroPoste: { cyberId: cyber.id, numeroPoste: poste },
      },
      update: {},
      create: {
        cyberId: cyber.id,
        numeroPoste: poste,
        statut: StatutPoste.VERROUILLE,
      },
    });
  }

  console.log(
    `Seeded ${cyber.nombrePostes} postes for cyber ${cyber.id} (1-${cyber.nombrePostes})`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
