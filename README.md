# CyberControl (cyber-shield)

Système Zero Trust de gestion de cybercafé — empêche le vol de caisse et l'utilisation frauduleuse des PC.

**Multi-tenant** : un seul serveur peut gérer plusieurs établissements (`Cyber`), avec isolation des données par `cyberId`.

## Architecture

| Application | Rôle | Port |
|-------------|------|------|
| `cyber-server` | Backend NestJS + Prisma + WebSocket | 5001 |
| `cyber-ui` | Dashboard caisse Next.js | 3001 |
| `cyber-client` | Agent verrouillage WPF (Windows) | — |

## Prérequis

- Node.js 20+
- PostgreSQL (Supabase recommandé)
- .NET 8 SDK (pour `cyber-client`, Windows uniquement)

## Configuration

### cyber-server

1. Ouvrez [Supabase Dashboard](https://supabase.com/dashboard/project/fbmmzzxoezgpcxvaddei/settings/database) → **Database** → **Connection string**
2. Copiez **Transaction pooler** (port 6543) → `DATABASE_URL`
3. Copiez **Session pooler** ou **Direct** (port 5432) → `DIRECT_URL`

```bash
cd cyber-server
cp .env.example .env
# Renseigner DATABASE_URL, DIRECT_URL, JWT_SECRET
npm install
npx prisma migrate deploy
npx prisma db seed
npm run start:dev
```

Comptes créés par le seed :

| Utilisateur | Mot de passe | Rôle | Accès |
|-------------|--------------|------|-------|
| `admin` | `admin123` | ADMIN | Tous les cybers (sélecteur UI) |
| `staff` | `staff123` | STAFF | Cyber par défaut uniquement |

### cyber-ui

```bash
cd cyber-ui
cp .env.local.example .env.local
npm install
npm run dev
```

Connexion sur http://localhost:3001/login

### cyber-client

Éditer `appsettings.json` :

```json
{
  "ServerHost": "localhost",
  "ServerPort": 5001,
  "CyberId": "cyber_legacy_default",
  "NumeroPoste": 1
}
```

Le `CyberId` est visible dans l'UI admin (**Cybers**) ou via `GET /cybers`.

```bash
cd cyber-client
dotnet build
dotnet run
```

## Authentification et multi-cyber

- `POST /auth/login` → JWT (`Authorization: Bearer`)
- Routes métier (`/config`, `/tickets`) : header **`X-Cyber-Id`** obligatoire pour l'admin ; imposé automatiquement pour le staff
- `GET /cybers`, `POST /cybers` : réservés à l'**ADMIN**

L'UI envoie automatiquement le token et le cyber actif (sélecteur dans le header pour l'admin).

## Règles de sécurité

1. **Append-only caisse** — aucun UPDATE/DELETE sur `TransactionCaisse`
2. **Ticket = transaction** — création ticket atomique avec encaissement
3. **Master Timer** — décompte temps uniquement côté serveur

## Tester un ticket (sans client WPF)

### Option A — Page web (recommandé)

1. Se connecter sur http://localhost:3001/login
2. Vendre un ticket sur `/dashboard`
3. Ouvrir `/test-client`, coller le code `TCK-XXXXX`, cliquer **Déverrouiller**
4. Vérifier sur le dashboard que le poste passe au vert

### Option B — Script CLI

```bash
cd cyber-server
npm run test:unlock -- --cyber cyber_legacy_default --poste 1 --code TCK-XXXXX
npm run test:unlock -- --cyber cyber_legacy_default --poste 1 --code TCK-XXXXX --watch
```

WebSocket PC : `ws://host:5001/cyber?cyber=CYBER_ID&poste=N`

## Consultation des tickets émis

Page **Tickets** : http://localhost:3001/tickets (par établissement actif)

API (authentifiée + `X-Cyber-Id`) :

- `GET /tickets?statut=VALIDE&q=TCK`
- `GET /tickets/TCK-XXXXX`

## Configuration d'un établissement

Page **Paramètres** : http://localhost:3001/settings

- Nom, nombre de postes, prix/min, durées de ticket
- Montant des tickets calculé côté serveur (`durée × prix/min`)

Créer un **second cyber** (admin) : http://localhost:3001/cybers

API :

- `GET /config`, `PATCH /config` — cyber actif (`X-Cyber-Id`)
- `GET /cybers`, `POST /cybers` — admin uniquement
