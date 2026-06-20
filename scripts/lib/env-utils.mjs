import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { randomBytes } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(__dirname, '..');

export function parseEnvFile(content) {
  const vars = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    vars[key] = value;
  }
  return vars;
}

export function serializeEnv(vars) {
  return (
    Object.entries(vars)
      .map(([k, v]) => {
        const needsQuotes = /[\s#"]/.test(v);
        return needsQuotes ? `${k}="${v}"` : `${k}=${v}`;
      })
      .join('\n') + '\n'
  );
}

export function loadEnvFile(path) {
  if (!existsSync(path)) return {};
  return parseEnvFile(readFileSync(path, 'utf8'));
}

export function loadSharedEnv() {
  const sharedPath = join(ROOT, '.env.shared');
  if (existsSync(sharedPath)) {
    return loadEnvFile(sharedPath);
  }
  const serverPath = join(ROOT, 'cyber-server', '.env');
  if (existsSync(serverPath)) {
    return loadEnvFile(serverPath);
  }
  return {};
}

export function ensureSharedExample() {
  const sharedPath = join(ROOT, '.env.shared');
  const examplePath = join(ROOT, '.env.shared.example');
  if (!existsSync(sharedPath) && existsSync(examplePath)) {
    copyFileSync(examplePath, sharedPath);
    console.log('Créé .env.shared depuis .env.shared.example');
  }
}

export function generateJwtSecret() {
  return randomBytes(32).toString('hex');
}

export function isPlaceholder(value) {
  if (!value) return true;
  return (
    value.includes('your-') ||
    value.includes('[YOUR-') ||
    value === 'password' ||
    value === 'change-me-in-production'
  );
}
