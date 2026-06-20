# Installation à distance (cloud / siège)

Guide pour l'**administrateur au siège** — déploiement Supabase + Vercel et utilisation de la caisse **depuis l'extérieur**, sans être sur le réseau du cybercafé.

Pour l'installation sur site (serveur edge + PC), voir [INSTALLATION-SUCCURSALE.md](INSTALLATION-SUCCURSALE.md).  
Pour comprendre le câblage global, voir [ARCHITECTURE.md](ARCHITECTURE.md).

## Prérequis

- Node.js 20+
- Compte [Supabase](https://supabase.com)
- Compte [Vercel](https://vercel.com)
- Clone du dépôt et accès Internet

```bash
git clone <repo-url> cyber-shield
cd cyber-shield
npm install
npm run setup:cloud
```

`setup:cloud` crée `.env.shared`, `cyber-server/.env`, `cyber-ui/.env.local` et propose d'exécuter les migrations.

## 1. Supabase (une fois par projet)

### Option rapide (recommandée)

```bash
npm run setup:cloud
```

Le script demande les variables Supabase (ou lit `.env.shared`) et génère tous les fichiers `.env`.

Référence manuelle : [`.env.shared.example`](../.env.shared.example)

### Créer ou utiliser un projet (manuel)

1. [Supabase Dashboard](https://supabase.com/dashboard) → créer un projet Postgres
2. **Settings → Database → Connection string** :
   - **Transaction pooler** (port 6543) → `DATABASE_URL`
   - **Direct** (port 5432) → `DIRECT_URL`
3. **Settings → API** :
   - `SUPABASE_URL` — URL du projet
   - Clé **anon** / **publishable** (`sb_publishable__...`) → UI client
   - Clé **service_role** / **secret** (`sb_secret__...` ou JWT `eyJ...`) → scripts + edge

### Configurer `cyber-server/.env` (pour les scripts DB)

Les commandes `db:*` lisent [`cyber-server/.env`](../cyber-server/.env) via `dotenv-cli` dans [`packages/db`](../packages/db).

```bash
cp cyber-server/.env.example cyber-server/.env
```

Renseigner au minimum :

| Variable | Usage |
|----------|--------|
| `DATABASE_URL` | Pooler Supabase (6543) |
| `DIRECT_URL` | Connexion directe (5432) |
| `SUPABASE_URL` | URL projet |
| `SUPABASE_SERVICE_ROLE_KEY` | Obligatoire pour `db:seed:auth` |

### Migrations et données initiales

Depuis la **racine** du monorepo :

```bash
npm run db:generate
npm run db:deploy
npm run db:seed
npm run db:seed:auth
```

| Commande | Effet |
|----------|--------|
| `db:generate` | Génère le client Prisma |
| `db:deploy` | Applique les migrations sur Supabase |
| `db:seed` | Crée cyber par défaut + comptes admin/staff |
| `db:seed:auth` | Lie les comptes à Supabase Auth |

### Comptes initiaux

| Email | Mot de passe | Rôle |
|-------|--------------|------|
| `admin@cybercontrol.local` | `admin123` | ADMIN |
| `staff@cybercontrol.local` | `staff123` | STAFF |

> **Sécurité** : changer ces mots de passe en production (Supabase Dashboard → Authentication → Users, ou via votre procédure).

### Dépannage `db:seed:auth`

Erreur « Invalid API key » :

1. Supabase Dashboard → **Settings → API**
2. Utiliser la clé **service_role** (JWT `eyJ...`) ou **Secret** (`sb_secret__...`)
3. **Ne pas** utiliser la clé publishable (`sb_publishable__...`)
4. Mettre à jour `SUPABASE_SERVICE_ROLE_KEY` dans `cyber-server/.env` et relancer

## 2. Déployer `cyber-ui` sur Vercel

### Option A — CLI

```bash
cd cyber-ui
npm i -g vercel   # si besoin
vercel link
vercel env pull .env.local   # optionnel
vercel --prod
```

### Option B — GitHub

Dans le [dashboard Vercel](https://vercel.com) :

| Paramètre | Valeur |
|-----------|--------|
| Framework | Next.js |
| Root directory | `cyber-ui` |
| Build command | `npm run build` |

### Variables d'environnement (Production + Preview)

Référence : [`cyber-ui/.env.local.example`](../cyber-ui/.env.local.example)

| Variable | Exemple | Notes |
|----------|---------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | Figée au build |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | clé anon / publishable | Figée au build |
| `DATABASE_URL` | pooler `:6543` | **Server-only** — Server Actions |
| `DIRECT_URL` | direct `:5432` | **Server-only** |

Ne pas définir `NEXT_PUBLIC_API_URL` ni `NEXT_PUBLIC_WS_BASE` pour la caisse en production — le dashboard utilise Supabase Realtime.

Après changement d'une variable `NEXT_PUBLIC_*` : **redéployer** (`vercel --prod` ou push sur `main`).

## 3. Utiliser la caisse depuis l'extérieur

### Connexion

1. Ouvrir `https://votre-projet.vercel.app/login` (ou `http://localhost:3000/login` en dev)
2. Se connecter avec l'**email** (pas le username) : ex. `admin@cybercontrol.local`
3. Choisir la **succursale** dans le sélecteur du header (`cyberId` actif)

Le sélecteur est géré par [`cyber-ui/lib/cyber-context.tsx`](../cyber-ui/lib/cyber-context.tsx) :

- **ADMIN** : tous les établissements actifs
- **STAFF** : cybers assignés dans `app_metadata.cyberIds`

### Dashboard `/dashboard`

| Fonction | Mécanisme |
|----------|-----------|
| Grille des postes | Supabase Realtime (`SessionOrdinateur`, `Ticket`, `PostePresence`) |
| Vente ticket | Server Actions → Postgres (`sourceMiseAJour=CLOUD`) |
| Session libre | Server Actions → relay edge vers PC |

**Pas de VPN** vers le cybercafé requis pour la caisse.

### Prérequis côté succursale

Pour que les actions (vente, déverrouillage) **atteignent les PC**, le serveur edge de la succursale doit être en ligne avec `EDGE_CYBER_ID` correspondant au cyber sélectionné. Voir [INSTALLATION-SUCCURSALE.md](INSTALLATION-SUCCURSALE.md).

Sans edge actif : lecture/écriture en base OK, mais pas de relay vers les postes.

### Limites actuelles

| Page | Depuis l'extérieur |
|------|-------------------|
| Login, dashboard caisse | Fonctionnel |
| Stats, staff, tickets, cybers, fidélité, settings | **Non fonctionnel** — REST legacy (`lib/api.ts`), migration phase 3b à venir |

## 4. Dev local (optionnel)

Après `setup:cloud`, lancer UI + edge en une commande :

```bash
npm run dev   # cyber-server :5001 + cyber-ui :3000
```

Ou UI seule : `cd cyber-ui && npm run dev`

## 5. CI GitHub (migrations prod)

Workflow manuel **DB Deploy** (`.github/workflows/db-deploy.yml`) — secrets repository requis :

| Secret | Usage |
|--------|--------|
| `DATABASE_URL` | Pooler Supabase |
| `DIRECT_URL` | Connexion directe |
| `SUPABASE_URL` | URL projet |
| `SUPABASE_SERVICE_ROLE_KEY` | `db:seed:auth` |

GitHub → Actions → **DB Deploy** → Run workflow (options `run_seed`, `run_seed_auth`).

Le workflow **CI** (push/PR sur `main`) vérifie les builds sans secrets.

## 6. Checklist siège

- [ ] Projet Supabase créé, URLs et clés récupérées
- [ ] `npm run setup:cloud` OK (ou config manuelle)
- [ ] `npm run db:generate && db:deploy && db:seed && db:seed:auth` OK
- [ ] Variables Vercel configurées (`NEXT_PUBLIC_SUPABASE_*`, `DATABASE_URL`, `DIRECT_URL`)
- [ ] `cyber-ui` déployé sur Vercel
- [ ] Login `https://…/login` OK
- [ ] Dashboard Realtime OK (grille visible)
- [ ] Mots de passe seed changés
- [ ] Par succursale : livrer `.env.shared` ou `cyber-server/.env` + [fiche technicien](INSTALLATION-SUCCURSALE.md) (`setup:edge` → `edge:up`)
- [ ] Test bout-en-bout : vente ticket à distance → déverrouillage PC sur site
