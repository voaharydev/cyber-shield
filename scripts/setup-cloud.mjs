#!/usr/bin/env node
import { createInterface } from 'readline';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { spawnSync } from 'child_process';
import {
  ROOT,
  parseEnvFile,
  serializeEnv,
  loadEnvFile,
  ensureSharedExample,
  generateJwtSecret,
  isPlaceholder,
} from './lib/env-utils.mjs';

const SHARED_KEYS = [
  'DATABASE_URL',
  'DIRECT_URL',
  'SUPABASE_URL',
  'SUPABASE_PUBLISHABLE_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
];

function prompt(rl, question, defaultValue = '') {
  const suffix = defaultValue ? ` [${maskSecret(defaultValue)}]` : '';
  return new Promise((resolve) => {
    rl.question(`${question}${suffix}: `, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
}

function maskSecret(value) {
  if (!value || value.length < 8) return '***';
  return `${value.slice(0, 4)}…${value.slice(-4)}`;
}

async function collectSharedVars(existing) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const vars = { ...existing };

  console.log('\nConfiguration Supabase (Entrée = garder la valeur existante)\n');

  for (const key of SHARED_KEYS) {
    if (!vars[key] || isPlaceholder(vars[key])) {
      vars[key] = await prompt(rl, key, vars[key] || '');
    }
  }

  rl.close();
  return vars;
}

function writeSharedEnv(vars) {
  const lines = [
    '# Généré par npm run setup:cloud',
    ...SHARED_KEYS.map((k) => `${k}=${vars[k]}`),
  ];
  writeFileSync(join(ROOT, '.env.shared'), lines.join('\n') + '\n');
}

function writeServerEnv(shared) {
  const existing = loadEnvFile(join(ROOT, 'cyber-server', '.env'));
  const server = {
    ...shared,
    PORT: existing.PORT || '5001',
    CORS_ORIGIN:
      existing.CORS_ORIGIN || 'http://localhost:3000,http://localhost:3001',
    JWT_SECRET: existing.JWT_SECRET || generateJwtSecret(),
    EDGE_CYBER_ID: existing.EDGE_CYBER_ID || 'cyber_legacy_default',
    EDGE_WS_SECRET: existing.EDGE_WS_SECRET || '',
  };
  writeFileSync(join(ROOT, 'cyber-server', '.env'), serializeEnv(server));
  console.log('Écrit cyber-server/.env');
}

function writeUiEnv(shared) {
  const ui = {
    NEXT_PUBLIC_SUPABASE_URL: shared.SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: shared.SUPABASE_PUBLISHABLE_KEY,
    DATABASE_URL: shared.DATABASE_URL,
    DIRECT_URL: shared.DIRECT_URL,
    NEXT_PUBLIC_WS_BASE: 'ws://localhost:5001/cyber',
  };
  writeFileSync(join(ROOT, 'cyber-ui', '.env.local'), serializeEnv(ui));
  console.log('Écrit cyber-ui/.env.local');
}

async function confirmRunDb() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise((resolve) => {
    rl.question(
      '\nExécuter db:generate, db:deploy, db:seed, db:seed:auth ? [O/n]: ',
      (a) => resolve(a.trim().toLowerCase()),
    );
  });
  rl.close();
  return answer !== 'n' && answer !== 'non';
}

function runDbSetup() {
  const steps = ['db:generate', 'db:deploy', 'db:seed', 'db:seed:auth'];
  for (const step of steps) {
    console.log(`\n> npm run ${step}`);
    const result = spawnSync('npm', ['run', step], {
      cwd: ROOT,
      stdio: 'inherit',
      shell: true,
    });
    if (result.status !== 0) {
      console.error(`Échec: npm run ${step}`);
      process.exit(result.status ?? 1);
    }
  }
}

async function main() {
  console.log('CyberControl — setup cloud (siège)\n');
  ensureSharedExample();

  const sharedPath = join(ROOT, '.env.shared');
  let shared = existsSync(sharedPath) ? loadEnvFile(sharedPath) : {};

  const needsInput = SHARED_KEYS.some(
    (k) => !shared[k] || isPlaceholder(shared[k]),
  );
  if (needsInput) {
    shared = await collectSharedVars(shared);
  } else {
    console.log('Variables trouvées dans .env.shared');
  }

  writeSharedEnv(shared);
  writeServerEnv(shared);
  writeUiEnv(shared);

  console.log('\nFichiers générés. Prochaines étapes :');
  console.log('  npm run dev          — UI + edge en local');
  console.log('  cd cyber-ui && vercel --prod   — déployer sur Vercel');

  if (await confirmRunDb()) {
    runDbSetup();
    console.log('\nSetup cloud terminé. Login : admin@cybercontrol.local / admin123');
  } else {
    console.log('\nPensez à lancer : npm run db:generate && npm run db:deploy && npm run db:seed && npm run db:seed:auth');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
