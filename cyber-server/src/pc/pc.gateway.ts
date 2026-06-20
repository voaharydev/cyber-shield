import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';
import { IncomingMessage } from 'http';
import { WebSocket } from 'ws';
import { PrismaService } from '../prisma/prisma.service';
import { PcService } from './pc.service';

interface ClientMeta {
  cyberId: string;
  numeroPoste: number;
}

@WebSocketGateway({ path: '/cyber' })
export class PcGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(PcGateway.name);
  private readonly clientMeta = new WeakMap<WebSocket, ClientMeta>();

  constructor(
    private readonly pcService: PcService,
    private readonly prisma: PrismaService,
  ) {}

  handleConnection(client: WebSocket, request: IncomingMessage) {
    void this.handleConnectionAsync(client, request);
  }

  private async handleConnectionAsync(
    client: WebSocket,
    request: IncomingMessage,
  ) {
    try {
      const host = request.headers.host ?? 'localhost';
      const url = new URL(request.url ?? '/cyber', `http://${host}`);
      const role = url.searchParams.get('role');
      const posteParam = url.searchParams.get('poste');
      const cyberId = url.searchParams.get('cyber');
      const wsSecret = url.searchParams.get('secret');
      const expectedSecret = process.env.EDGE_WS_SECRET;

      if (role === 'dashboard') {
        client.close(
          1008,
          'Dashboard WebSocket déplacé vers Supabase Realtime (cloud)',
        );
        return;
      }

      if (!cyberId) {
        client.close(1008, 'Paramètre cyber requis');
        return;
      }

      if (expectedSecret && wsSecret !== expectedSecret) {
        client.close(1008, 'Secret WebSocket invalide');
        return;
      }

      const cyber = await this.prisma.cyber.findUnique({
        where: { id: cyberId },
        select: { isActive: true },
      });
      if (!cyber?.isActive) {
        client.close(1008, 'Établissement désactivé ou archivé');
        return;
      }

      if (!posteParam) {
        client.close(1008, 'Paramètre poste requis');
        return;
      }

      const numeroPoste = parseInt(posteParam, 10);
      if (isNaN(numeroPoste) || numeroPoste < 1) {
        client.close(1008, 'Numéro de poste invalide');
        return;
      }

      this.clientMeta.set(client, { cyberId, numeroPoste });
      await this.pcService.registerPcConnection(cyberId, numeroPoste, client);
      this.logger.log(`PC poste ${numeroPoste} connecté (cyber ${cyberId})`);

      client.on('message', (data: Buffer | ArrayBuffer | Buffer[]) => {
        const raw =
          typeof data === 'string'
            ? data
            : Buffer.isBuffer(data)
              ? data.toString('utf-8')
              : Buffer.concat(data as Buffer[]).toString('utf-8');
        void this.pcService.handleIncomingMessage(
          client,
          cyberId,
          numeroPoste,
          raw,
        );
      });

      client.on('error', (err) => {
        this.logger.error('WebSocket error', err);
      });
    } catch (error) {
      this.logger.error('Erreur connexion WebSocket', error);
      client.close(1011, 'Erreur serveur');
    }
  }

  handleDisconnect(client: WebSocket) {
    const meta = this.clientMeta.get(client);
    if (!meta) {
      return;
    }

    void this.pcService.unregisterPcConnection(meta.cyberId, meta.numeroPoste);
    this.logger.log(
      `PC poste ${meta.numeroPoste} déconnecté (cyber ${meta.cyberId})`,
    );
    this.clientMeta.delete(client);
  }
}
