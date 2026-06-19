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

### Données de démo (dev)

Pour peupler l'application avec un jeu de test complet (3 cybers, ~8 000 tickets/transactions sur 90 jours + N-1, statuts variés) :

```bash
cd cyber-server
npm run seed:demo   # reset + régénération (dev uniquement)
```

> **Attention** : ce script supprime tous les tickets, transactions, cybers démo et employés démo existants, puis régénère le jeu complet. Refusé en production sauf `DEMO_SEED_CONFIRM=true`.

Comptes staff supplémentaires créés :

| Utilisateur | Mot de passe | Cybers assignés |
|-------------|--------------|-----------------|
| `staff_nord` | `staff123` | Cyber Nord |
| `staff_sud` | `staff123` | Cyber Sud |
| `staff_multi` | `staff123` | Cyber Nord + Cyber Sud |

Établissements de démo : `cyber_legacy_default` (CyberControl), `cyber_demo_nord`, `cyber_demo_sud`.

Vérifier ensuite : `/stats` (graphiques + N-1), `/tickets`, `/cybers`, `/staff`.

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
- Routes métier (`/config`, `/tickets`) : header **`X-Cyber-Id`** obligatoire (admin et staff)
- `GET /cybers`, `POST /cybers` : réservés à l'**ADMIN**
- `GET /users`, `POST /users`, `PATCH /users/:id`, `DELETE /users/:id` : gestion des **employés** (ADMIN)
- `GET /stats/sales` : statistiques de ventes tickets + CA (ADMIN, `cyberId` optionnel en query)

### Rôles

| Rôle | Accès cybers | UI |
|------|--------------|-----|
| **ADMIN** | Tous les établissements (sélecteur) | `/cybers`, `/staff`, `/stats` |
| **STAFF** | Un ou plusieurs cybers assignés | Sélecteur si plusieurs cybers |

### Gestion des employés (admin)

Page **Employés** : http://localhost:3001/staff

- Créer un compte staff (identifiant, mot de passe)
- Affecter à **un ou plusieurs** cybers (cases à cocher)
- Modifier : réaffectation, reset mot de passe, activer/désactiver
- Désactivation = soft-delete (`isActive: false`) — l'historique tickets/caisse est conservé

Un staff avec plusieurs cybers bascule entre eux via le sélecteur du header (comme l'admin, mais liste filtrée).

### Statistiques de ventes (admin)

Page **Statistiques** : http://localhost:3001/stats

- **Établissement actif** : tickets vendus et chiffre d'affaires pour le cyber sélectionné
- **Tous les établissements** : totaux consolidés + tableau comparatif par cyber (avec N-1)
- **Comparer** : sélection de plusieurs établissements, tableau détaillé, graphiques en barres CA/tickets
- Graphiques (tickets + CA) avec courbe N-1 et ligne de moyenne
- Comparaison année précédente (même période) et moyennes par jour/semaine/mois
- Agrégation par jour, semaine ou mois ; presets 7j / 30j / 90j / 12 mois
- Bouton **Exporter CSV** : résumé, détail par période et comparaison par établissement (N-1 + deltas)

API : `GET /stats/sales?groupBy=day&from=2026-05-18&to=2026-06-17&cyberId=...`

Comparaison multi-cybers :

```
GET /stats/sales?from=2026-05-18&to=2026-06-17&cyberIds=cyber_demo_nord,cyber_demo_sud
```

- `groupBy` : `day` | `week` | `month` (défaut `day`)
- `from` / `to` : dates ISO (défauts selon `groupBy` si omis)
- `cyberId` : un seul établissement (mode actif)
- `cyberIds` : liste séparée par des virgules (prioritaire sur `cyberId`) — totaux agrégés du groupe + `byCyber` détaillé
- sans filtre : tous les cybers

Réponse inclut `averages`, `previousYear` (totaux + buckets N-1), `byCyber` (par établissement avec N-1) pour comparaison et graphiques.

L'UI envoie automatiquement le token (sans `X-Cyber-Id` pour cette route admin).

### Fidélité réseau

Programme commun à **tous les établissements** — un client identifié par **téléphone** cumule des points dans n'importe quel cyber.

**Configuration (admin)** : http://localhost:3001/fidelite

| Paramètre | Défaut | Description |
|-----------|--------|-------------|
| `pointsParMinuteAchat` | 1 | Points gagnés par minute achetée |
| `pointsPourMinuteGratuite` | 10 | Coût en points d'1 minute bonus |
| `pointsPour100Ar` | 5 | Coût en points de 100 Ar de réduction |
| `actif` | true | Activer/désactiver le programme |

**Caisse** (`/dashboard`) : champ téléphone → Rechercher / Inscrire → utiliser des points (minutes gratuites ou réduction Ar) lors de la vente.

API :

- `GET /fidelite/config`, `PATCH /fidelite/config` — admin
- `GET /fidelite/clients/lookup?telephone=` — staff + `X-Cyber-Id`
- `POST /fidelite/clients` — inscrire un client
- `GET /fidelite/clients/:id/mouvements` — historique
- `POST /tickets` — champs optionnels `telephone`, `echangePoints: { type, points }`

Clients démo (`npm run seed:demo`) : `032 12 345 67` (120 pts), `033 11 122 33` (85 pts), `034 12 345 67` (200 pts).

Le journal `MouvementFidelite` est append-only ; le solde = somme des mouvements.

### Session libre (post-payé)

Mode **paiement à la fin** : démarrage sans ticket, facturation à l'arrêt, poste bloqué en `A_PAYER` jusqu'à encaissement.

**Tarif** : `baseTarifHoraire = prixParMinute × 60` (Ar/h) snapshot à l'ouverture. Facturation minute supérieure.

| Action | API / WebSocket |
|--------|-----------------|
| Démarrer | `POST /sessions/postpayee/:poste/start` ou WS `try_postpaid_start` |
| Arrêter (lock PC) | `POST /sessions/postpayee/:poste/stop` ou WS `stop_postpaid` |
| Encaisser | `POST /sessions/postpayee/:poste/encaisser` — `{ "typePaiement": "ESPECES" }` |
| Réinitialiser | `POST /sessions/:poste/reset` — débloquer un poste qui ne répond plus |

Dashboard : carte bleue (chrono + montant estimé), carte orange clignotante (`A_PAYER` + Encaisser).

**Réinitialiser un poste** (bouton sur le dashboard) :

| État | Effet |
|------|-------|
| Prépayé `EN_COURS` | Poste `VERROUILLE`, ticket remis en `VALIDE` (minutes restantes conservées) |
| Session libre `EN_COURS` hors ligne | Arrêt + facturation → `A_PAYER` |
| `VERROUILLE` mais connecté (WS zombie) | Coupure de la connexion WebSocket |
| `A_PAYER` | Refusé — encaissement obligatoire |

## Règles de sécurité

1. **Append-only caisse** — aucun UPDATE/DELETE sur `TransactionCaisse`
2. **Append-only fidélité** — aucun UPDATE/DELETE sur `MouvementFidelite`
3. **Ticket = transaction** — création ticket atomique avec encaissement
4. **Session libre** — poste `A_PAYER` bloqué jusqu'à écriture `TransactionCaisse` ; verrouillage PC immédiat à l'arrêt
5. **Master Timer** — décompte temps uniquement côté serveur (prépayé uniquement)

## Tester un ticket (sans client WPF)

### Option A — Page web (recommandé)

1. Se connecter sur http://localhost:3001/login
2. Vendre un ticket sur `/dashboard` (prépayé) ou tester la session libre
3. Ouvrir `/test-client`, choisir le poste simulé
4. **Ticket** : coller `TCK-XXXXX` → **Déverrouiller**
5. **Session libre** : **Session libre** → chrono bleu sur le dashboard → **Terminer** → encaisser sur le dashboard
6. Vérifier que le poste passe au vert (prépayé) ou orange `A_PAYER` (post-payé)

### Option B — Script CLI (one-shot)

```bash
cd cyber-server
npm run test:unlock -- --cyber cyber_legacy_default --poste 1 --code TCK-XXXXX
```

### Option C — Simulateur de poste (CLI interactif)

Simule un poste WPF connecté en permanence (poste **jaune** sur le dashboard) :

```bash
cd cyber-server
npm run test:pc -- --cyber cyber_legacy_default --poste 1 --interactive
```

Dans le terminal interactif :

| Commande | Action |
|----------|--------|
| `unlock TCK-XXX` | Déverrouiller avec un ticket prépayé |
| `start` | Démarrer une session libre (post-payé) |
| `stop` | Arrêter la session libre + verrouillage |
| `ping` | Ping serveur |
| `quit` | Quitter |

One-shot session libre (sans mode interactif) :

```bash
npm run test:pc -- --cyber cyber_legacy_default --poste 1 --postpaid-start
npm run test:pc -- --cyber cyber_legacy_default --poste 1 --postpaid-stop
```

Test bout-en-bout session libre sans WPF :

1. Terminal A : `npm run test:pc -- --cyber cyber_legacy_default --poste 1 --interactive`
2. Dashboard : poste 1 passe jaune (connecté)
3. Terminal A : `start` → carte bleue sur le dashboard
4. Terminal A : `stop` → carte orange `A_PAYER`, script affiche VERROUILLÉ
5. Dashboard : **Encaisser & Libérer**

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
