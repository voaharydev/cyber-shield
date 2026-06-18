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

## Déploiement production (Vercel)

Architecture recommandée : **dashboard sur Vercel** + **API/WebSocket sur un hôte Node long-running** + **PC en connexion sortante**.

```
[PC WPF] ──wss://──┐
[Caisse web] ──https──► [Vercel: cyber-ui]
                              │
                              ├── REST ──► [API: cyber-server]
                              └── wss ───► [API: cyber-server] ──► [Supabase]
```

> **Important** : `cyber-ui` (Next.js) se déploie sur **Vercel**. `cyber-server` (NestJS + WebSocket persistant + Master Timer) **ne convient pas** aux Vercel Functions serverless (connexions longues, état en mémoire). L'API doit tourner sur un **processus Node continu** (VPS, Fly.io, Railway, machine locale + tunnel, etc.) — seul le dashboard est sur Vercel.

### 1. Base de données (Supabase)

Déjà en cloud. Variables pour `cyber-server` :

| Variable | Usage |
|----------|--------|
| `DATABASE_URL` | Pooler (port 6543) — requêtes runtime |
| `DIRECT_URL` | Direct (port 5432) — migrations Prisma |

### 2. Dashboard — Vercel (`cyber-ui`)

Depuis la racine du repo ou le dossier `cyber-ui` :

```bash
cd cyber-ui
npm i -g vercel   # si besoin
vercel link
vercel env pull .env.local   # optionnel — sync des vars distantes
vercel --prod
```

Ou connecter le dépôt GitHub dans le [dashboard Vercel](https://vercel.com) :

| Paramètre | Valeur |
|-----------|--------|
| Framework | Next.js |
| Root directory | `cyber-ui` |
| Build command | `npm run build` (défaut) |

**Variables d'environnement** (Production + Preview) — `NEXT_PUBLIC_*` = **figées au build** :

| Variable | Exemple prod |
|----------|----------------|
| `NEXT_PUBLIC_API_URL` | `https://api.votredomaine.com` |
| `NEXT_PUBLIC_WS_BASE` | `wss://api.votredomaine.com/cyber` |

Ne pas mettre `?role=dashboard` ni `?cyber=` dans `WS_BASE` : l'UI les ajoute selon l'établissement actif.

Après changement de variable : **redéployer** (`vercel --prod` ou push sur `main`).

URL UI obtenue : `https://votre-projet.vercel.app` (ou domaine custom).

### 3. Backend — hôte Node long-running (`cyber-server`)

Héberger `cyber-server` sur un service **web Node persistant** (pas Vercel Functions), par exemple un VPS ou Fly.io :

```bash
cd cyber-server
npm install
npx prisma generate
npm run build
npx prisma migrate deploy
npx prisma db seed   # une fois
npm run start:prod
```

Le serveur écoute sur `0.0.0.0:$PORT` (voir `main.ts`).

**Variables d'environnement** (`cyber-server`) :

| Variable | Exemple | Notes |
|----------|---------|--------|
| `DATABASE_URL` | `postgresql://...:6543/...` | Supabase pooler |
| `DIRECT_URL` | `postgresql://...:5432/...` | Supabase direct |
| `JWT_SECRET` | longue chaîne aléatoire | **Obligatoire** en prod |
| `CORS_ORIGIN` | `https://votre-projet.vercel.app` | URL **exacte** du dashboard Vercel (sans slash final) |
| `PORT` | `5001` ou port imposé par l'hébergeur | |

Configurer un domaine ou sous-domaine avec **TLS** (ex. `api.votredomaine.com`) pointant vers ce serveur.

**WebSocket en production** — toujours **`wss://`** :

```
wss://api.votredomaine.com/cyber?cyber=CYBER_ID&poste=N
wss://api.votredomaine.com/cyber?cyber=CYBER_ID&role=dashboard
```

Mettre à jour `CORS_ORIGIN` avec l'URL Vercel réelle, puis redémarrer le backend.

### 4. Clients PC (WPF)

Sur chaque poste Windows, éditer `appsettings.json` :

```json
{
  "ServerHost": "api.votredomaine.com",
  "ServerPort": 443,
  "CyberId": "votre_cyber_id",
  "NumeroPoste": 1
}
```

Le client WPF utilise encore `ws://` dans le code : en prod TLS, adapter pour **`wss://`** sur le port 443.

Chaque poste doit avoir un **`NumeroPoste`** unique au sein du même `CyberId`.

### 5. Réseau (cybercafé)

| Flux | Direction | Bloquant ? |
|------|-----------|------------|
| PC → API/WebSocket | Sortant (Internet) | Non — passe le NAT sans config box |
| Serveur → PC | Jamais | — |
| Caisse (Vercel) → API | Sortant | Non |

Seule exigence côté cybercafé : **Internet sortant** stable (HTTPS + WebSocket).

### 6. Checklist post-déploiement

- [ ] `cyber-ui` déployé sur Vercel avec `NEXT_PUBLIC_API_URL` et `NEXT_PUBLIC_WS_BASE` en `https` / `wss`
- [ ] `cyber-server` accessible en HTTPS/WSS sur un hôte long-running
- [ ] `npx prisma migrate deploy` + seed sur la DB prod
- [ ] `JWT_SECRET` fort, mots de passe seed (`admin123` / `staff123`) changés
- [ ] `CORS_ORIGIN` = URL Vercel prod exacte
- [ ] Login UI → vente ticket → déverrouillage test-client OK
- [ ] WebSockets `wss://` visibles dans l'onglet Réseau du navigateur

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
