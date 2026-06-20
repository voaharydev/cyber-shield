#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { join } from 'path';
import {
  ROOT,
  serializeEnv,
  loadEnvFile,
  loadSharedEnv,
  ensureSharedExample,
  generateJwtSecret,
} from './lib/env-utils.mjs';

function parseArgs(argv) {
  const args = { cyberId: null, corsOrigin: null };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--cyber-id' && argv[i + 1]) {
      args.cyberId = argv[++i];
    } else if (argv[i] === '--cors-origin' && argv[i + 1]) {
      args.corsOrigin = argv[++i];
    }
  }
  return args;
}

function main() {
  const { cyberId, corsOrigin } = parseArgs(process.argv);

  if (!cyberId) {
    console.error('Usage: npm run setup:edge -- --cyber-id <cyberId> [--cors-origin <url>]');
    console.error('Exemple: npm run setup:edge -- --cyber-id cyber_legacy_default');
    process.exit(1);
  }

  console.log(`CyberControl — setup edge (succursale: ${cyberId})\n`);
  ensureSharedExample();

  const shared = loadSharedEnv();
  const required = [
    'DATABASE_URL',
    'DIRECT_URL',
    'SUPABASE_URL',
    'SUPABASE_SERVICE_ROLE_KEY',
  ];
  const missing = required.filter((k) => !shared[k]);
  if (missing.length > 0) {
    console.error(
      `Variables manquantes : ${missing.join(', ')}\n` +
        'Lancez d\'abord npm run setup:cloud ou renseignez .env.shared',
    );
    process.exit(1);
  }

  const existing = loadEnvFile(join(ROOT, 'cyber-server', '.env'));
  const server = {
    DATABASE_URL: shared.DATABASE_URL,
    DIRECT_URL: shared.DIRECT_URL,
    SUPABASE_URL: shared.SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY: shared.SUPABASE_PUBLISHABLE_KEY || '',
    SUPABASE_SERVICE_ROLE_KEY: shared.SUPABASE_SERVICE_ROLE_KEY,
    EDGE_CYBER_ID: cyberId,
    PORT: existing.PORT || '5001',
    CORS_ORIGIN:
      corsOrigin ||
      existing.CORS_ORIGIN ||
      'http://localhost:3000,http://localhost:3001',
    JWT_SECRET: existing.JWT_SECRET || generateJwtSecret(),
    EDGE_WS_SECRET: existing.EDGE_WS_SECRET || '',
  };

  writeFileSync(join(ROOT, 'cyber-server', '.env'), serializeEnv(server));
  console.log('Écrit cyber-server/.env');
  console.log(`  EDGE_CYBER_ID=${cyberId}`);

  console.log('\nDémarrer l\'edge (Docker — recommandé) :');
  console.log('  npm run edge:up');
  console.log('  npm run edge:health');
  console.log('  npm run edge:logs    # vérifier "SupabaseSync actif"');
  console.log('\nAlternative dev (Node.js, développeurs) :');
  console.log('  cd cyber-server && npm run start:dev');
}

main();
