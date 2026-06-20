# Installation locale (succursale)

Guide pour le **technicien sur site** au cybercafé — serveur edge (`cyber-server`) en **Docker**, clients PC (`cyber-client` WPF) et réseau local.

Pour Supabase, Vercel et utilisation de la caisse à distance, voir [INSTALLATION-DISTANCE.md](INSTALLATION-DISTANCE.md).  
Pour le câblage cloud ↔ edge ↔ PC, voir [ARCHITECTURE.md](ARCHITECTURE.md).

## Prérequis

| Élément | Requis |
|---------|--------|
| Machine edge | **Docker** + **Docker Compose**, Internet sortant stable |
| Node.js 20+ | Optionnel — uniquement pour dev local ou scripts `setup:*` |
| PC postes | Windows, .NET 8 SDK (build) ou binaire déployé |
| Base cloud | Projet Supabase déjà configuré ([INSTALLATION-DISTANCE.md](INSTALLATION-DISTANCE.md)) |
| Établissement | `cyberId` existant en base (seed ou création admin) |

Le siège fournit en général `.env.shared` ou `cyber-server/.env` pré-rempli (voir checklist [INSTALLATION-DISTANCE.md](INSTALLATION-DISTANCE.md)).

## 1. Edge Docker (recommandé)

### Flux rapide

```bash
git clone <repo-url> cyber-shield
cd cyber-shield

# Config edge (vars Supabase depuis .env.shared ou setup:cloud au siège)
npm run setup:edge -- --cyber-id cyber_legacy_default --cors-origin https://votre-projet.vercel.app

npm run edge:up
npm run edge:health
```

Réponse `/health` attendue :

```json
{"status":"ok","edgeCyberId":"cyber_legacy_default","supabaseSync":true}
```

### Commandes Docker

| Commande | Action |
|----------|--------|
| `npm run edge:up` | Build + démarrage en arrière-plan |
| `npm run edge:down` | Arrêt du conteneur |
| `npm run edge:logs` | Logs (chercher `SupabaseSync actif`) |
| `npm run edge:health` | Vérification rapide |

### Configuration (`cyber-server/.env`)

Généré par `npm run setup:edge`. Variables **obligatoires** pour `supabaseSync: true` :

| Variable | Exemple | Notes |
|----------|---------|--------|
| `EDGE_CYBER_ID` | `cyber_legacy_default` | **Un nœud = un cyber** |
| `DATABASE_URL` | pooler `:6543` | Même projet Supabase que l'UI |
| `DIRECT_URL` | direct `:5432` | |
| `SUPABASE_URL` | `https://xxx.supabase.co` | |
| `SUPABASE_SERVICE_ROLE_KEY` | clé secrète | Realtime + heartbeat |
| `CORS_ORIGIN` | URL Vercel exacte | Sans slash final |
| `PORT` | `5001` | Mappé dans `docker-compose.yml` |

Configuration manuelle : copier [`cyber-server/.env.example`](../cyber-server/.env.example).

### PC WPF → machine Docker

Si l'edge tourne en Docker sur la machine succursale :

| Contexte | `ServerHost` | `ServerPort` |
|----------|--------------|--------------|
| LAN (même réseau) | IP locale du serveur (ex. `192.168.1.10`) | `5001` |
| Prod TLS | Domaine du reverse proxy (ex. `api.votredomaine.com`) | `443` |

Les PC se connectent en WebSocket **sortant** vers l'hôte exposant le port 5001 (ou `wss://` via reverse proxy Caddy/Nginx).

### Hébergement cloud

Même [`Dockerfile`](../cyber-server/Dockerfile) (contexte = racine monorepo) sur VPS, Render, Fly.io, etc.

## 2. Alternative dev (Node.js)

Pour les **développeurs** qui modifient le code edge sans reconstruire l'image :

```bash
npm run setup:edge -- --cyber-id cyber_legacy_default
cd cyber-server && npm run start:dev   # :5001, hot-reload
```

Ou stack complète UI + edge :

```bash
npm run setup:cloud
npm run setup:edge -- --cyber-id cyber_legacy_default
npm run dev   # edge :5001 + UI :3000
```

Log attendu (Node ou Docker) :

```
SupabaseSync actif pour cyber cyber_legacy_default
```

Si `SupabaseSync désactivé` : vérifier `EDGE_CYBER_ID`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` dans `cyber-server/.env`, puis `npm run edge:logs`.

## 3. Installer `cyber-client` (WPF) sur chaque PC

### Configuration `appsettings.json`

**LAN + Docker local :**

```json
{
  "ServerHost": "192.168.1.10",
  "ServerPort": 5001,
  "CyberId": "cyber_legacy_default",
  "NumeroPoste": 1
}
```

**Production TLS :**

```json
{
  "ServerHost": "api.votredomaine.com",
  "ServerPort": 443,
  "CyberId": "votre_cyber_id",
  "NumeroPoste": 1
}
```

| Champ | Règle |
|-------|--------|
| `CyberId` | **Identique** à `EDGE_CYBER_ID` |
| `NumeroPoste` | Unique par poste au sein du même `CyberId` |

### Build et lancement

```bash
cd cyber-client
dotnet build
dotnet run
```

WebSocket PC : `ws://host:5001/cyber?cyber=CYBER_ID&poste=N` (ou `wss://` en prod TLS).

## 4. Réseau succursale

| Flux | Direction | Port entrant requis ? |
|------|-----------|----------------------|
| PC → edge WebSocket | Sortant | Non — passe le NAT |
| Edge → Supabase | Sortant Internet | Non |
| Edge → PC | Jamais (initié par le PC) | — |
| Caisse cloud → Supabase | Sortant (hors site) | — |

Seule exigence : **Internet sortant** stable sur la machine Docker et les PC.

## 5. Multi-succursales

Chaque cybercafé = **une machine Docker** avec un `EDGE_CYBER_ID` unique :

```
Site Nord  → EDGE_CYBER_ID=cyber_demo_nord
Site Sud   → EDGE_CYBER_ID=cyber_demo_sud
```

Répéter `setup:edge` + `edge:up` par site. L'UI Vercel pilote toutes les succursales via le sélecteur `cyberId`.

## 6. Données de démo (dev uniquement)

Nécessite Node.js :

```bash
cd cyber-server
npm run seed:demo
```

## 7. Checklist succursale

- [ ] Docker + Docker Compose installés
- [ ] `npm run setup:edge -- --cyber-id <id>` (ou `.env` fourni par le siège)
- [ ] `npm run edge:up` OK
- [ ] `npm run edge:health` → `supabaseSync: true`
- [ ] `CORS_ORIGIN` = URL Vercel prod
- [ ] PC : `ServerHost` = IP/host Docker, `CyberId` + `NumeroPoste` uniques
- [ ] Poste **jaune** sur dashboard distant (Realtime)
- [ ] Test : vente ticket cloud → déverrouillage PC
- [ ] (Prod TLS) reverse proxy `wss://` devant le conteneur

## 8. Tester sans client WPF

### Simulateur web `/test-client`

Nécessite l'UI en local (`npm run dev`) et edge sur `:5001` :

1. `NEXT_PUBLIC_WS_BASE=ws://localhost:5001/cyber` dans `cyber-ui/.env.local`
2. Menu **Simulateur poste** → déverrouiller avec `TCK-XXXXX`

### Scripts CLI (Node.js)

```bash
cd cyber-server
npm run test:pc -- --cyber cyber_legacy_default --poste 1 --interactive
```
