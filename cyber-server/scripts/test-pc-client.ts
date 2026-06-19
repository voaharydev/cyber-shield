import * as readline from 'readline';
import WebSocket from 'ws';

type LockState = 'VERROUILLE' | 'DEVERROUILLE';

interface Args {
  cyber: string;
  poste: number;
  code?: string;
  host: string;
  port: number;
  interactive: boolean;
  postpaidStart: boolean;
  postpaidStop: boolean;
}

interface ServerMessage {
  event?: string;
  message?: string;
  typeSession?: string;
  tempsRestant?: number;
  tempsEcoule?: number;
  montantEstime?: number;
}

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const args: Args = {
    cyber: '',
    poste: 0,
    host: 'localhost',
    port: 5001,
    interactive: false,
    postpaidStart: false,
    postpaidStop: false,
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
      case '--interactive':
        args.interactive = true;
        break;
      case '--postpaid-start':
        args.postpaidStart = true;
        break;
      case '--postpaid-stop':
        args.postpaidStop = true;
        break;
      default:
        console.error(`Argument inconnu: ${argv[i]}`);
        process.exit(1);
    }
  }

  if (!args.cyber || !args.poste || isNaN(args.poste) || args.poste < 1) {
    console.error(
      'Usage: npm run test:pc -- --cyber <ID> --poste <N> [options]',
    );
    console.error('');
    console.error('Options:');
    console.error('  --code TCK-XXXXX       Déverrouillage ticket (one-shot)');
    console.error('  --postpaid-start       Démarrer session libre (one-shot)');
    console.error('  --postpaid-stop        Arrêter session libre (one-shot)');
    console.error('  --interactive / --watch Mode poste simulé interactif');
    console.error('  --host localhost       Hôte serveur (défaut: localhost)');
    console.error('  --port 5001            Port serveur (défaut: 5001)');
    process.exit(1);
  }

  const hasOneShot =
    !!args.code || args.postpaidStart || args.postpaidStop;
  if (!hasOneShot) {
    args.interactive = true;
  }

  return args;
}

function log(direction: 'in' | 'out' | 'info' | 'state', message: string) {
  const prefix =
    direction === 'in'
      ? '←'
      : direction === 'out'
        ? '→'
        : direction === 'state'
          ? '◆'
          : '•';
  const time = new Date().toLocaleTimeString('fr-FR');
  console.log(`[${time}] ${prefix} ${message}`);
}

function sendEvent(ws: WebSocket, payload: Record<string, unknown>) {
  const raw = JSON.stringify(payload);
  log('out', raw);
  ws.send(raw);
}

function handleServerMessage(
  msg: ServerMessage,
  lockState: { current: LockState },
) {
  switch (msg.event) {
    case 'unlock_success': {
      lockState.current = 'DEVERROUILLE';
      const session =
        msg.typeSession === 'POSTPAID' ? ' (session libre)' : '';
      log('state', `État: DÉVERROUILLÉ${session}`);
      break;
    }
    case 'command_lock':
    case 'session_stopped':
      lockState.current = 'VERROUILLE';
      log('state', 'État: VERROUILLÉ');
      break;
    case 'time_update':
      if (msg.typeSession === 'POSTPAID') {
        log(
          'state',
          `Session libre — ${msg.tempsEcoule ?? 0} min écoulées, ~${msg.montantEstime ?? 0} Ar`,
        );
      } else if (typeof msg.tempsRestant === 'number') {
        log('state', `${msg.tempsRestant} min restantes`);
      }
      break;
    case 'unlock_rejected':
    case 'error':
      log('info', `Erreur: ${msg.message ?? msg.event}`);
      break;
    case 'pong':
      log('info', 'pong');
      break;
  }
}

function printInteractiveHelp() {
  console.log('');
  console.log('Commandes (simulateur poste):');
  console.log('  unlock TCK-XXXXX   Déverrouiller avec un ticket');
  console.log('  start              Démarrer session libre');
  console.log('  stop               Arrêter session libre');
  console.log('  ping               Ping serveur');
  console.log('  quit               Quitter');
  console.log('');
}

function startInteractiveMode(ws: WebSocket, lockState: { current: LockState }) {
  printInteractiveHelp();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
  });

  const prompt = () => {
    rl.question('poste> ', (line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        prompt();
        return;
      }

      const [cmd, ...rest] = trimmed.split(/\s+/);
      const arg = rest.join(' ').trim();

      switch (cmd.toLowerCase()) {
        case 'unlock':
          if (!arg) {
            log('info', 'Usage: unlock TCK-XXXXX');
          } else {
            sendEvent(ws, {
              event: 'try_unlock',
              code: arg.toUpperCase(),
            });
          }
          break;
        case 'start':
          sendEvent(ws, { event: 'try_postpaid_start' });
          break;
        case 'stop':
          sendEvent(ws, { event: 'stop_postpaid' });
          break;
        case 'ping':
          sendEvent(ws, { event: 'ping' });
          break;
        case 'quit':
        case 'exit':
          log('info', 'Arrêt...');
          rl.close();
          ws.close();
          process.exit(0);
          return;
        case 'help':
          printInteractiveHelp();
          break;
        default:
          log('info', `Commande inconnue: ${cmd} (tapez help)`);
      }

      prompt();
    });
  };

  rl.on('close', () => {
    ws.close();
  });

  prompt();
}

function main() {
  const args = parseArgs();
  const url = `ws://${args.host}:${args.port}/cyber?cyber=${encodeURIComponent(args.cyber)}&poste=${args.poste}`;
  const lockState: { current: LockState } = { current: 'VERROUILLE' };
  let resolved = false;

  log('info', `Connexion à ${url}`);

  const ws = new WebSocket(url);

  const finishOneShot = (code: number) => {
    if (resolved) return;
    resolved = true;
    if (!args.interactive) {
      ws.close();
      process.exit(code);
    }
  };

  ws.on('open', () => {
    log('info', `Connecté — cyber ${args.cyber}, poste ${args.poste}`);
    log('state', 'État: VERROUILLÉ');

    if (args.code) {
      sendEvent(ws, {
        event: 'try_unlock',
        code: args.code.trim().toUpperCase(),
      });
    } else if (args.postpaidStart) {
      sendEvent(ws, { event: 'try_postpaid_start' });
    } else if (args.postpaidStop) {
      sendEvent(ws, { event: 'stop_postpaid' });
    }

    if (args.interactive) {
      startInteractiveMode(ws, lockState);
    } else if (!args.code && !args.postpaidStart && !args.postpaidStop) {
      log('info', 'Aucune action one-shot. Utilisez --interactive.');
      finishOneShot(0);
    }
  });

  ws.on('message', (data) => {
    const raw = data.toString();
    log('in', raw);

    try {
      const msg = JSON.parse(raw) as ServerMessage;
      handleServerMessage(msg, lockState);

      if (!args.interactive) {
        if (msg.event === 'unlock_success' || msg.event === 'session_stopped') {
          finishOneShot(0);
        } else if (msg.event === 'unlock_rejected' || msg.event === 'error') {
          finishOneShot(1);
        }
      }
    } catch {
      if (!args.interactive) {
        finishOneShot(1);
      }
    }
  });

  ws.on('error', (err) => {
    log('info', `Erreur: ${err.message}`);
    if (!args.interactive) {
      finishOneShot(1);
    }
  });

  ws.on('close', () => {
    if (!resolved && !args.interactive) {
      log('info', 'Connexion fermée');
      finishOneShot(1);
    }
  });

  process.on('SIGINT', () => {
    log('info', 'Arrêt...');
    ws.close();
    process.exit(0);
  });
}

main();
