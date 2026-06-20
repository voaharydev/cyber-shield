# CyberControl (cyber-shield)

Système Zero Trust de gestion de cybercafé — empêche le vol de caisse et l'utilisation frauduleuse des PC.

**Multi-tenant** : un seul serveur peut gérer plusieurs établissements (`Cyber`), avec isolation des données par `cyberId`.

## Architecture (Siège / Succursale)

| Composant | Déploiement | Rôle |
|-----------|-------------|------|
| `cyber-ui` | **Cloud Vercel** | Caisse web, Supabase Auth, Server Actions + Prisma, Realtime grille |
| `cyber-server` | **Docker local** (cybercafé) | WebSocket PC, timers prépayé, relay cloud→PC via Supabase Realtime |
| Supabase Postgres | Cloud | Source de vérité + pont temps réel |
| `cyber-client` | PC Windows | Agent verrouillage WPF |

```
[Caisse Vercel] ──Server Actions/Realtime──► [Supabase Postgres]
                                                    ▲
[cyber-server local] ──Prisma LOCAL + SyncService──┘
        │
        └──WebSocket──► [PC WPF]
```

Le dashboard **ne se connecte plus** au WebSocket local. La grille lit `SessionOrdinateur`, `Ticket` et `PostePresence` via **Supabase Realtime**. Les actions caisse (vente, session libre) passent par des **Server Actions** qui écrivent en base avec `sourceMiseAJour=CLOUD` ; le serveur edge relaie les ordres aux PC.

> Documentation détaillée : [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — connexion distante, flux cloud→edge→PC, multi-succursales.

Packages partagés : `packages/db` (Prisma), `packages/domain` (logique métier).

## Documentation

| Guide | Public | Contenu |
|-------|--------|---------|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Tous | Câblage Siège/Succursale, flux `sourceMiseAJour`, sécurité |
| [INSTALLATION-DISTANCE.md](docs/INSTALLATION-DISTANCE.md) | Admin siège | Supabase, Vercel, migrations, utilisation caisse à distance |
| [INSTALLATION-SUCCURSALE.md](docs/INSTALLATION-SUCCURSALE.md) | Technicien sur site | Fiche terrain : edge Docker, PC WPF, checklist |
| [INSTALLATION-LOCALE.md](docs/INSTALLATION-LOCALE.md) | Technicien / dev | Référence technique : réseau, TLS, dev Node, simulateur |

## Prérequis

**Siège / dev** : Node.js 20+, PostgreSQL (Supabase)

**Succursale (edge)** : Docker + Docker Compose (Node.js optionnel)

**PC postes** : .NET 8 SDK (Windows)

## Démarrage rapide

### Siège + dev local (UI + edge)

```bash
npm install
npm run setup:cloud
npm run setup:edge -- --cyber-id cyber_legacy_default
npm run dev                  # edge Node :5001 + UI :3000 (développeurs)
```

### Succursale (edge Docker — production)

```bash
npm run setup:edge -- --cyber-id cyber_legacy_default --cors-origin https://xxx.vercel.app
npm run edge:up
npm run edge:health
```

Login UI : http://localhost:3000/login — `admin@cybercontrol.local` / `admin123`

Guides : [INSTALLATION-DISTANCE.md](docs/INSTALLATION-DISTANCE.md) · [INSTALLATION-SUCCURSALE.md](docs/INSTALLATION-SUCCURSALE.md)

## État de migration cloud

| Page / flux | Mécanisme actuel |
|-------------|------------------|
| Login, dashboard caisse | Supabase Auth + Server Actions + Realtime |
| Simulateur `/test-client` | WebSocket edge local (`NEXT_PUBLIC_WS_BASE`) |
| Stats, staff, tickets, cybers, fidélité, settings | REST `cyber-server` via `lib/api.ts` — **non fonctionnel** sans JWT legacy ; migration phase 3b à venir |

## Configuration

Variables et procédures détaillées :

- **Edge** (`cyber-server/.env`) → [INSTALLATION-LOCALE.md](docs/INSTALLATION-LOCALE.md)
- **UI** (`cyber-ui/.env.local`, Vercel) → [INSTALLATION-DISTANCE.md](docs/INSTALLATION-DISTANCE.md)
- **Client WPF** (`appsettings.json`) → [INSTALLATION-SUCCURSALE.md](docs/INSTALLATION-SUCCURSALE.md)

Comptes initiaux après `db:seed` + `db:seed:auth` : `admin@cybercontrol.local` / `admin123`, `staff@cybercontrol.local` / `staff123`.

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

## Déploiement production

- **Cloud / siège** (Supabase + Vercel + utilisation à distance) → [INSTALLATION-DISTANCE.md](docs/INSTALLATION-DISTANCE.md)
- **Succursale** (edge + PC + réseau) → [INSTALLATION-SUCCURSALE.md](docs/INSTALLATION-SUCCURSALE.md)

Architecture : dashboard Vercel + serveur edge local par cybercafé + PC en connexion sortante. `cyber-server` ne convient pas aux Vercel Functions (WebSocket persistant, Master Timer).

## Authentification et multi-cyber

### UI (Supabase Auth)

- Connexion par **email / mot de passe** sur `/login`
- Rôles et cybers assignés dans `app_metadata` (`role`, `cyberIds`)
- `npm run db:seed:auth` lie les comptes `User` ↔ Supabase Auth

### Rôles

| Rôle | Accès cybers | UI |
|------|--------------|-----|
| **ADMIN** | Tous les établissements (sélecteur) | `/cybers`, `/staff`, `/stats` |
| **STAFF** | Un ou plusieurs cybers assignés | Sélecteur si plusieurs cybers |

### API REST legacy (edge)

Utilisée par les pages admin non migrées et les scripts CLI. Nécessite un JWT obtenu via `POST /auth/login`.

- `POST /auth/login` → JWT (`Authorization: Bearer`)
- Routes métier (`/config`, `/tickets`) : header **`X-Cyber-Id`** obligatoire (admin et staff)
- `GET /cybers`, `POST /cybers` : réservés à l'**ADMIN**
- `GET /users`, `POST /users`, `PATCH /users/:id`, `DELETE /users/:id` : gestion des **employés** (ADMIN)
- `GET /stats/sales` : statistiques de ventes tickets + CA (ADMIN, `cyberId` optionnel en query)

### Gestion des employés (admin)

Page **Employés** : http://localhost:3000/staff *(REST legacy — phase 3b)*

- Créer un compte staff (identifiant, mot de passe)
- Affecter à **un ou plusieurs** cybers (cases à cocher)
- Modifier : réaffectation, reset mot de passe, activer/désactiver
- Désactivation = soft-delete (`isActive: false`) — l'historique tickets/caisse est conservé

### Statistiques de ventes (admin)

Page **Statistiques** : http://localhost:3000/stats *(REST legacy — phase 3b)*

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

### Fidélité réseau

Programme commun à **tous les établissements** — un client identifié par **téléphone** cumule des points dans n'importe quel cyber.

**Configuration (admin)** : http://localhost:3000/fidelite *(REST legacy — phase 3b)*

| Paramètre | Défaut | Description |
|-----------|--------|-------------|
| `pointsParMinuteAchat` | 1 | Points gagnés par minute achetée |
| `pointsPourMinuteGratuite` | 10 | Coût en points d'1 minute bonus |
| `pointsPour100Ar` | 5 | Coût en points de 100 Ar de réduction |
| `actif` | true | Activer/désactiver le programme |

**Caisse** (`/dashboard`) : champ téléphone → Rechercher / Inscrire → utiliser des points (minutes gratuites ou réduction Ar) lors de la vente.

Clients démo (`npm run seed:demo`) : `032 12 345 67` (120 pts), `033 11 122 33` (85 pts), `034 12 345 67` (200 pts).

Le journal `MouvementFidelite` est append-only ; le solde = somme des mouvements.

### Session libre (post-payé)

Mode **paiement à la fin** : démarrage sans ticket, facturation à l'arrêt, poste bloqué en `A_PAYER` jusqu'à encaissement.

**Tarif** : `baseTarifHoraire = prixParMinute × 60` (Ar/h) snapshot à l'ouverture. Facturation minute supérieure.

| Action | Dashboard (Server Actions) | Edge / simulateur |
|--------|---------------------------|-------------------|
| Démarrer | `startPostpaidSessionAction` | `POST /sessions/postpayee/:poste/start` ou WS `try_postpaid_start` |
| Arrêter (lock PC) | `stopPostpaidSessionAction` | `POST /sessions/postpayee/:poste/stop` ou WS `stop_postpaid` |
| Encaisser | `encaisserPostpaidSessionAction` | `POST /sessions/postpayee/:poste/encaisser` |
| Réinitialiser | `resetSessionAction` | `POST /sessions/:poste/reset` |

Les actions dashboard écrivent avec `sourceMiseAJour=CLOUD` ; `SupabaseSyncService` relaie vers les PC connectés en edge.

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
5. **Master Timer** — décompte temps uniquement côté serveur edge (prépayé uniquement)

## Tester un ticket (sans client WPF)

### Option A — Page web (recommandé)

1. Se connecter sur http://localhost:3000/login
2. Lancer `cyber-server` en local (`EDGE_CYBER_ID` = cyber actif)
3. Vendre un ticket sur `/dashboard` (prépayé) ou tester la session libre
4. Ouvrir `/test-client` (menu **Simulateur poste**) — nécessite `NEXT_PUBLIC_WS_BASE=ws://localhost:5001/cyber`
5. Choisir le poste simulé (le poste passe **jaune** sur le dashboard via **Realtime** `PostePresence`)
6. **Ticket** : coller `TCK-XXXXX` → **Déverrouiller**
7. **Session libre** : **Session libre** → chrono bleu sur le dashboard → **Terminer la session** → encaisser sur le dashboard
8. Vérifier que le poste passe au vert (prépayé) ou orange `A_PAYER` (post-payé)

Le journal WebSocket et le bouton Ping sont disponibles dans **Mode technique** (section repliable).

### Option B — Script CLI (one-shot)

```bash
cd cyber-server
npm run test:unlock -- --cyber cyber_legacy_default --poste 1 --code TCK-XXXXX
```

### Option C — Simulateur de poste (CLI interactif)

Simule un poste WPF connecté en permanence (poste **jaune** sur le dashboard via Realtime) :

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
2. Dashboard : poste 1 passe jaune (connecté via Realtime)
3. Terminal A : `start` → carte bleue sur le dashboard
4. Terminal A : `stop` → carte orange `A_PAYER`, script affiche VERROUILLÉ
5. Dashboard : **Encaisser & Libérer**

WebSocket PC : `ws://host:5001/cyber?cyber=CYBER_ID&poste=N`

## Consultation des tickets émis

Page **Tickets** : http://localhost:3000/tickets *(REST legacy — phase 3b)*

API (authentifiée + `X-Cyber-Id`) :

- `GET /tickets?statut=VALIDE&q=TCK`
- `GET /tickets/TCK-XXXXX`

## Configuration d'un établissement

Page **Paramètres** : http://localhost:3000/settings *(REST legacy — phase 3b)*

- Nom, nombre de postes, prix/min, durées de ticket
- Montant des tickets calculé côté serveur (`durée × prix/min`)

Créer un **second cyber** (admin) : http://localhost:3000/cybers *(REST legacy — phase 3b)*

### Cycle de vie d'un établissement (admin)

Page **Cybers** : modifier, désactiver, archiver, réactiver et dupliquer.

| Action | Effet |
|--------|-------|
| Modifier | Nom, postes, durées ticket, prix/min |
| Désactiver | `isActive = false` — bloque caisse, WebSocket et sélecteur |
| Archiver | Désactivation + `archivedAt` — masqué des listes actives |
| Réactiver | Remet l'établissement actif (`isActive = true`, `archivedAt = null`) |
| Dupliquer | Nouveau cyber avec la même config, sans tickets ni staff |

Impossible de désactiver/archiver si un poste est `EN_COURS` ou `A_PAYER`. La duplication ne copie pas l'historique (tickets, transactions).

API :

- `GET /cybers?includeInactive=true&includeArchived=true` — liste filtrée (défaut : actifs non archivés)
- `GET /cybers/:id`, `PATCH /cybers/:id`
- `POST /cybers/:id/deactivate`, `/archive`, `/reactivate`, `/duplicate`
- `GET /config`, `PATCH /config` — cyber actif (`X-Cyber-Id`)
- `GET /cybers`, `POST /cybers` — admin uniquement
