# Installation succursale

Fiche **technicien sur site** — installer le serveur edge et les clients PC. Le cloud (Supabase + Vercel) est déjà configuré par le siège.

> Guide technique détaillé : [INSTALLATION-LOCALE.md](INSTALLATION-LOCALE.md) (dev Node, TLS, multi-sites, simulateur).

## Ce que le siège doit fournir

| Élément | Description |
|---------|-------------|
| `.env.shared` ou `cyber-server/.env` | Clés Supabase (`DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, etc.) |
| `cyberId` | Identifiant de l'établissement (ex. `cyber_legacy_default`) |
| URL Vercel | Pour `CORS_ORIGIN` (ex. `https://votre-projet.vercel.app`) |
| Nombre de postes | Pour attribuer `NumeroPoste` unique à chaque PC |

## Prérequis machine edge

| Élément | Requis |
|---------|--------|
| Docker + Docker Compose | Obligatoire |
| Internet sortant | Obligatoire |
| Node.js 20+ | Pour `npm run setup:edge` uniquement |
| Git | Pour cloner le dépôt |

## Installation en 5 étapes

### 1. Cloner le projet

```bash
git clone <repo-url> cyber-shield
cd cyber-shield
npm install
```

### 2. Copier la configuration fournie par le siège

Placer `.env.shared` à la racine du projet **ou** copier directement `cyber-server/.env` si le siège l'a déjà généré.

### 3. Générer la config edge

```bash
npm run setup:edge -- --cyber-id <cyberId> --cors-origin https://xxx.vercel.app
```

Remplacez `<cyberId>` et l'URL Vercel par les valeurs fournies par le siège.

### 4. Démarrer l'edge (Docker)

```bash
npm run edge:up
```

### 5. Vérifier le healthcheck

```bash
npm run edge:health
```

Réponse attendue :

```json
{"status":"ok","edgeCyberId":"<cyberId>","supabaseSync":true}
```

Si `supabaseSync` est `false`, voir [Dépannage rapide](#dépannage-rapide).

Log attendu dans les logs :

```bash
npm run edge:logs
# Chercher : SupabaseSync actif pour cyber <cyberId>
```

## Configurer les PC (cyber-client)

Sur chaque poste Windows, éditer [`cyber-client/appsettings.json`](../cyber-client/appsettings.json) :

```json
{
  "ServerHost": "192.168.1.10",
  "ServerPort": 5001,
  "CyberId": "<cyberId>",
  "NumeroPoste": 1
}
```

| Champ | Valeur |
|-------|--------|
| `ServerHost` | IP locale de la machine Docker (ex. `192.168.1.10`) |
| `ServerPort` | `5001` |
| `CyberId` | **Identique** à `EDGE_CYBER_ID` / `<cyberId>` |
| `NumeroPoste` | Unique par PC (1, 2, 3…) |

Build et lancement :

```bash
cd cyber-client
dotnet build
dotnet run
```

## Test bout-en-bout

1. Ouvrir la caisse Vercel (`https://xxx.vercel.app/login`)
2. Sélectionner la **succursale** (`cyberId`) dans le header
3. Vérifier que le poste apparaît **jaune** (connecté) sur la grille
4. Vendre un ticket depuis la caisse → le PC doit se déverrouiller

## Dépannage rapide

| Symptôme | Cause probable | Action |
|----------|----------------|--------|
| `edge unreachable` / crash `P1001` | Docker sans IPv6 → `db.*.supabase.co` injoignable | Utiliser l'URL **pooler** Supabase (`aws-0-…pooler.supabase.com`) dans `DATABASE_URL` et `DIRECT_URL` |
| `edge unreachable` | Conteneur arrêté ou port bloqué | `npm run edge:up` puis `npm run edge:logs` |
| `supabaseSync: false` | Vars manquantes dans `.env` | Vérifier `EDGE_CYBER_ID`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` ; relancer `setup:edge` |
| Log `SupabaseSync désactivé` | Même cause | Corriger `cyber-server/.env`, puis `npm run edge:down && npm run edge:up` |
| Poste gris sur dashboard | Client WPF non connecté | Vérifier `ServerHost`, `CyberId`, `NumeroPoste` ; PC sur le même réseau que le serveur |
| Vente cloud sans effet PC | `CyberId` mismatch ou edge hors ligne | `CyberId` PC = `EDGE_CYBER_ID` ; `edge:health` → `supabaseSync: true` |
| Erreur `setup:edge` | `.env.shared` absent ou incomplet | Demander au siège un `.env.shared` valide |

## Commandes utiles

| Commande | Action |
|----------|--------|
| `npm run edge:up` | Démarrer l'edge |
| `npm run edge:down` | Arrêter l'edge |
| `npm run edge:logs` | Voir les logs |
| `npm run edge:health` | Vérifier `/health` |

## Checklist succursale

- [ ] Docker + Docker Compose installés
- [ ] `.env.shared` ou `cyber-server/.env` reçu du siège
- [ ] `npm run setup:edge -- --cyber-id <id>` OK
- [ ] `npm run edge:up` OK
- [ ] `npm run edge:health` → `supabaseSync: true`
- [ ] `CORS_ORIGIN` = URL Vercel prod
- [ ] PC : `ServerHost` = IP machine Docker, `CyberId` + `NumeroPoste` uniques
- [ ] Poste **jaune** sur dashboard distant (Realtime)
- [ ] Test : vente ticket cloud → déverrouillage PC

## Aller plus loin

| Sujet | Guide |
|-------|-------|
| Docker détaillé, variables `.env`, hébergement VPS | [INSTALLATION-LOCALE.md §1](INSTALLATION-LOCALE.md#1-edge-docker-recommandé) |
| Dev Node.js (développeurs) | [INSTALLATION-LOCALE.md §2](INSTALLATION-LOCALE.md#2-alternative-dev-nodejs) |
| Reverse proxy TLS (`wss://`) | [INSTALLATION-LOCALE.md §1](INSTALLATION-LOCALE.md#pc-wpf--machine-docker) |
| Multi-succursales | [INSTALLATION-LOCALE.md §5](INSTALLATION-LOCALE.md#5-multi-succursales) |
| Tester sans client WPF | [INSTALLATION-LOCALE.md §8](INSTALLATION-LOCALE.md#8-tester-sans-client-wpf) |
| Configuration cloud (siège) | [INSTALLATION-DISTANCE.md](INSTALLATION-DISTANCE.md) |
| Architecture cloud ↔ edge ↔ PC | [ARCHITECTURE.md](ARCHITECTURE.md) |
