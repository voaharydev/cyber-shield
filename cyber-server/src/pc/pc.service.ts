import {
  SourceMiseAJour,
  StatutPoste,
  StatutTicket,
  TypeSession,
} from '@cyber-shield/db';
import { computeLivePostpaid } from '@cyber-shield/domain';
import {
  Inject,
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
  forwardRef,
} from '@nestjs/common';
import { WebSocket } from 'ws';
import { PrismaService } from '../prisma/prisma.service';
import { SessionService } from '../session/session.service';

export interface PosteState {
  numeroPoste: number;
  statut: StatutPoste;
  connected: boolean;
  typeSession: TypeSession | null;
  tempsRestant: number | null;
  tempsEcouleMinutes: number | null;
  montantEstime: number | null;
  montantDu: number | null;
  ticketCode: string | null;
}

interface IncomingMessage {
  event: string;
  code?: string;
}

function pcKey(cyberId: string, numeroPoste: number): string {
  return `${cyberId}:${numeroPoste}`;
}

@Injectable()
export class PcService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PcService.name);
  private readonly pcConnections = new Map<string, WebSocket>();
  private masterTimer: ReturnType<typeof setInterval> | null = null;
  private postpaidUiTimer: ReturnType<typeof setInterval> | null = null;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => SessionService))
    private readonly sessionService: SessionService,
  ) {}

  onModuleInit() {
    this.masterTimer = setInterval(() => {
      void this.tickPrepaidTimer();
    }, 60_000);
    this.postpaidUiTimer = setInterval(() => {
      void this.tickPostpaidUi();
    }, 10_000);
    this.logger.log('Master Timer démarré (prépayé 60s, post-payé UI 10s)');
  }

  onModuleDestroy() {
    if (this.masterTimer) {
      clearInterval(this.masterTimer);
      this.masterTimer = null;
    }
    if (this.postpaidUiTimer) {
      clearInterval(this.postpaidUiTimer);
      this.postpaidUiTimer = null;
    }
  }

  private async upsertPresence(
    cyberId: string,
    numeroPoste: number,
    connected: boolean,
  ) {
    await this.prisma.postePresence.upsert({
      where: {
        cyberId_numeroPoste: { cyberId, numeroPoste },
      },
      update: {
        connected,
        lastSeenAt: new Date(),
      },
      create: {
        cyberId,
        numeroPoste,
        connected,
        lastSeenAt: new Date(),
      },
    });
  }

  async registerPcConnection(
    cyberId: string,
    numeroPoste: number,
    client: WebSocket,
  ) {
    this.pcConnections.set(pcKey(cyberId, numeroPoste), client);
    await this.upsertPresence(cyberId, numeroPoste, true);
  }

  async unregisterPcConnection(cyberId: string, numeroPoste: number) {
    this.pcConnections.delete(pcKey(cyberId, numeroPoste));
    await this.upsertPresence(cyberId, numeroPoste, false);
  }

  async kickPcConnection(cyberId: string, numeroPoste: number) {
    const key = pcKey(cyberId, numeroPoste);
    const client = this.pcConnections.get(key);
    if (client) {
      this.pcConnections.delete(key);
      if (
        client.readyState === WebSocket.OPEN ||
        client.readyState === WebSocket.CONNECTING
      ) {
        client.close(1000, 'Reset par la caisse');
      }
    }
    await this.upsertPresence(cyberId, numeroPoste, false);
  }

  isPcConnected(cyberId: string, numeroPoste: number): boolean {
    const client = this.pcConnections.get(pcKey(cyberId, numeroPoste));
    return client !== undefined && client.readyState === WebSocket.OPEN;
  }

  private sendJson(client: WebSocket, payload: Record<string, unknown>) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(payload));
    }
  }

  sendToPc(
    cyberId: string,
    numeroPoste: number,
    payload: Record<string, unknown>,
  ) {
    const client = this.pcConnections.get(pcKey(cyberId, numeroPoste));
    if (client) {
      this.sendJson(client, payload);
    }
  }

  async handleIncomingMessage(
    client: WebSocket,
    cyberId: string,
    numeroPoste: number,
    raw: string,
  ) {
    let message: IncomingMessage;
    try {
      message = JSON.parse(raw) as IncomingMessage;
    } catch {
      this.sendJson(client, { event: 'error', message: 'JSON invalide' });
      return;
    }

    switch (message.event) {
      case 'ping':
        this.sendJson(client, { event: 'pong' });
        break;
      case 'try_unlock':
        if (!message.code) {
          this.sendJson(client, {
            event: 'unlock_rejected',
            message: 'Code manquant',
          });
          return;
        }
        await this.tryUnlock(cyberId, numeroPoste, message.code, client);
        break;
      case 'try_postpaid_start':
        await this.tryPostpaidStart(cyberId, numeroPoste, client);
        break;
      case 'stop_postpaid':
        await this.tryPostpaidStop(cyberId, numeroPoste, client);
        break;
      default:
        this.sendJson(client, {
          event: 'error',
          message: `Événement inconnu: ${message.event}`,
        });
    }
  }

  private async tryPostpaidStart(
    cyberId: string,
    numeroPoste: number,
    client: WebSocket,
  ) {
    try {
      await this.sessionService.demarrerSessionPostPayee(cyberId, numeroPoste);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Session libre refusée';
      this.sendJson(client, { event: 'unlock_rejected', message });
    }
  }

  private async tryPostpaidStop(
    cyberId: string,
    numeroPoste: number,
    client: WebSocket,
  ) {
    try {
      await this.sessionService.arreterSessionPostPayee(cyberId, numeroPoste);
      this.sendJson(client, { event: 'session_stopped' });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Arrêt session refusé';
      this.sendJson(client, { event: 'error', message });
    }
  }

  async tryUnlock(
    cyberId: string,
    numeroPoste: number,
    code: string,
    client: WebSocket,
  ) {
    const session = await this.prisma.sessionOrdinateur.findUnique({
      where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
    });

    if (!session) {
      this.sendJson(client, {
        event: 'unlock_rejected',
        message: 'Poste introuvable',
      });
      return;
    }

    if (session.statut === StatutPoste.A_PAYER) {
      this.sendJson(client, {
        event: 'unlock_rejected',
        message: 'Poste en attente de paiement à la caisse',
      });
      return;
    }

    if (session.statut === StatutPoste.EN_COURS) {
      this.sendJson(client, {
        event: 'unlock_rejected',
        message: "Poste déjà en cours d'utilisation",
      });
      return;
    }

    const ticket = await this.prisma.ticket.findUnique({
      where: {
        cyberId_codeUnique: {
          cyberId,
          codeUnique: code.toUpperCase(),
        },
      },
    });

    if (!ticket || ticket.statut !== StatutTicket.VALIDE) {
      this.sendJson(client, {
        event: 'unlock_rejected',
        message: 'Code invalide ou déjà utilisé',
      });
      return;
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.ticket.update({
        where: { id: ticket.id },
        data: { statut: StatutTicket.ACTIVE },
      });

      await tx.sessionOrdinateur.update({
        where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
        data: {
          statut: StatutPoste.EN_COURS,
          typeSession: TypeSession.PREPAID,
          ticketActuelId: ticket.id,
          tempsDebut: null,
          tempsFin: null,
          montantDu: null,
          sourceMiseAJour: SourceMiseAJour.LOCAL,
        },
      });
    });

    this.sendJson(client, { event: 'unlock_success' });
    this.sendToPc(cyberId, numeroPoste, {
      event: 'time_update',
      tempsRestant: ticket.tempsRestant,
      typeSession: TypeSession.PREPAID,
    });
  }

  async tickPrepaidTimer() {
    try {
      const activeSessions = await this.prisma.sessionOrdinateur.findMany({
        where: {
          statut: StatutPoste.EN_COURS,
          ticketActuelId: { not: null },
          NOT: { typeSession: TypeSession.POSTPAID },
        },
        include: { ticketActuel: true },
      });

      for (const session of activeSessions) {
        const ticket = session.ticketActuel;
        if (!ticket || ticket.statut !== StatutTicket.ACTIVE) {
          continue;
        }

        const newTempsRestant = ticket.tempsRestant - 1;

        if (newTempsRestant <= 0) {
          await this.prisma.$transaction(async (tx) => {
            await tx.ticket.update({
              where: { id: ticket.id },
              data: { tempsRestant: 0, statut: StatutTicket.EXPIRE },
            });

            await tx.sessionOrdinateur.update({
              where: { id: session.id },
              data: {
                statut: StatutPoste.VERROUILLE,
                typeSession: null,
                ticketActuelId: null,
                sourceMiseAJour: SourceMiseAJour.LOCAL,
              },
            });
          });

          this.sendToPc(session.cyberId, session.numeroPoste, {
            event: 'command_lock',
          });
        } else {
          await this.prisma.ticket.update({
            where: { id: ticket.id },
            data: { tempsRestant: newTempsRestant },
          });

          this.sendToPc(session.cyberId, session.numeroPoste, {
            event: 'time_update',
            tempsRestant: newTempsRestant,
            typeSession: TypeSession.PREPAID,
          });
        }
      }
    } catch (error) {
      this.logger.error('Erreur Master Timer prépayé', error);
    }
  }

  async tickPostpaidUi() {
    try {
      const activeSessions = await this.prisma.sessionOrdinateur.findMany({
        where: {
          statut: StatutPoste.EN_COURS,
          typeSession: TypeSession.POSTPAID,
          tempsDebut: { not: null },
        },
      });

      for (const session of activeSessions) {
        if (!session.tempsDebut) continue;

        const live = computeLivePostpaid({
          tempsDebut: session.tempsDebut,
          baseTarifHoraire: session.baseTarifHoraire,
        });

        this.sendToPc(session.cyberId, session.numeroPoste, {
          event: 'time_update',
          typeSession: TypeSession.POSTPAID,
          tempsEcoule: live.tempsEcouleMinutes,
          montantEstime: live.montantEstime,
        });
      }
    } catch (error) {
      this.logger.error('Erreur timer UI post-payé', error);
    }
  }
}
