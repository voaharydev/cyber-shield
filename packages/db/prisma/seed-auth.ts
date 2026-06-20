import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { PrismaClient, Role } from '../src/generated';

const prisma = new PrismaClient();

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    'SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY requis pour seed-auth',
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function assertServiceRoleKey() {
  const { error } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1 });
  if (error?.message?.toLowerCase().includes('invalid api key')) {
    console.error(
      [
        'SUPABASE_SERVICE_ROLE_KEY invalide.',
        'Dashboard → Project Settings → API :',
        '  - clé legacy « service_role » (JWT eyJ...), ou',
        '  - clé « Secret » (sb_secret__...) — pas la publishable (sb_publishable__).',
        'Regénérez la clé si besoin, puis mettez à jour cyber-server/.env',
      ].join('\n'),
    );
    process.exit(1);
  }
  if (error) {
    throw error;
  }
}

const DEMO_PASSWORD = 'admin123';

async function syncUser(
  email: string,
  password: string,
  userId: string,
  role: Role,
  cyberIds: string[],
) {
  const { data: list } = await supabase.auth.admin.listUsers();
  const existing = list?.users.find((u) => u.email === email);

  let supabaseUserId: string;

  if (existing) {
    supabaseUserId = existing.id;
    await supabase.auth.admin.updateUserById(supabaseUserId, {
      password,
      app_metadata: {
        userId,
        role,
        cyberIds,
      },
    });
  } else {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      app_metadata: {
        userId,
        role,
        cyberIds,
      },
    });
    if (error || !data.user) {
      throw error ?? new Error(`Création Auth échouée pour ${email}`);
    }
    supabaseUserId = data.user.id;
  }

  await prisma.user.update({
    where: { id: userId },
    data: { supabaseUserId, email },
  });

  console.log(`Auth lié: ${email} → ${supabaseUserId} (${role})`);
}

async function main() {
  await assertServiceRoleKey();

  const users = await prisma.user.findMany({
    where: { isActive: true },
    include: {
      cybers: { select: { cyberId: true } },
    },
  });

  for (const user of users) {
    if (!user.email) {
      console.warn(`Skip ${user.username}: pas d'email`);
      continue;
    }

    const cyberIds =
      user.role === Role.ADMIN
        ? (
            await prisma.cyber.findMany({
              where: { isActive: true, archivedAt: null },
              select: { id: true },
            })
          ).map((c) => c.id)
        : user.cybers.map((c) => c.cyberId);

    const password =
      user.username === 'admin' || user.username === 'staff'
        ? user.username === 'admin'
          ? 'admin123'
          : 'staff123'
        : DEMO_PASSWORD;

    await syncUser(user.email, password, user.id, user.role, cyberIds);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
