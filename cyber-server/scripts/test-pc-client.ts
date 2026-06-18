import WebSocket from 'ws';

interface Args {
  cyber: string;
  poste: number;
  code?: string;
  host: string;
  port: number;
  watch: boolean;
}

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const args: Args = {
    cyber: '',
    poste: 0,
    host: 'localhost',
    port: 5001,
    watch: false,
  };

  for (let i = 0; i < argv.length; i++) {
    switch (argv[i]) {
      case '--cyber':
        args.cyber = argv[++i] ?? '';
        break;
      case '--poste':
        args.poste = parseInt(argv[++i] ?? '', 10);
        break;
      case '--code':
        args.code = argv[++i];
        break;
      case '--host':
        args.host = argv[++i] ?? 'localhost';
        break;
      case '--port':
        args.port = parseInt(argv[++i] ?? '5001', 10);
        break;
      case '--watch':
        args.watch = true;
        break;
      default:
        console.error(`Argument inconnu: ${argv[i]}`);
        process.exit(1);
    }
  }

  if (!args.cyber || !args.poste || isNaN(args.poste) || args.poste < 1) {
    console.error(
      'Usage: npm run test:unlock -- --cyber <ID> --poste <N> [--code TCK-XXXXX] [--host localhost] [--port 5001] [--watch]',
    );
    process.exit(1);
  }

  return args;
}

function log(direction: 'in' | 'out' | 'info', message: string) {
  const prefix =
    direction === 'in' ? '←' : direction === 'out' ? '→' : '•';
  const time = new Date().toLocaleTimeString('fr-FR');
  console.log(`[${time}] ${prefix} ${message}`);
}

function main() {
  const args = parseArgs();
  const url = `ws://${args.host}:${args.port}/cyber?cyber=${encodeURIComponent(args.cyber)}&poste=${args.poste}`;
  let resolved = false;

  log('info', `Connexion à ${url}`);

  const ws = new WebSocket(url);

  const finish = (code: number) => {
    if (resolved) return;
    resolved = true;
    if (!args.watch) {
      ws.close();
      process.exit(code);
    }
  };

  ws.on('open', () => {
    log('info', `Connecté — cyber ${args.cyber}, poste ${args.poste}`);

    if (args.code) {
      const payload = JSON.stringify({
        event: 'try_unlock',
        code: args.code.trim().toUpperCase(),
      });
      log('out', payload);
      ws.send(payload);
    } else if (!args.watch) {
      log('info', 'Aucun --code fourni. Utilisez --watch pour rester connecté.');
      finish(0);
    }
  });

  ws.on('message', (data) => {
    const raw = data.toString();
    log('in', raw);

    try {
      const msg = JSON.parse(raw) as { event?: string };
      if (msg.event === 'unlock_success') {
        finish(0);
      } else if (msg.event === 'unlock_rejected' || msg.event === 'error') {
        finish(1);
      }
    } catch {
      finish(1);
    }
  });

  ws.on('error', (err) => {
    log('info', `Erreur: ${err.message}`);
    finish(1);
  });

  ws.on('close', () => {
    if (!resolved) {
      log('info', 'Connexion fermée');
      finish(1);
    }
  });

  if (args.watch) {
    process.on('SIGINT', () => {
      log('info', 'Arrêt...');
      ws.close();
      process.exit(0);
    });
  }
}

main();
