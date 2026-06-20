import {
  Inject,
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
  forwardRef,
} from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
  SourceMiseAJour,
  StatutPoste,
  TypeSession,
} from '@cyber-shield/db';
import { PcService } from '../pc/pc.service';
import { PrismaService } from '../prisma/prisma.service';

const HEARTBEAT_INTERVAL_MS = 30_000;
const HEARTBEAT_FAILURE_THRESHOLD_MS = 120_000;

@Injectable()
export class SupabaseSyncService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(SupabaseSyncService.name);
  private supabase: SupabaseClient | null = null;
  private channel: ReturnType<SupabaseClient['channel']> | null = null;
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  private lastHeartbeatOk = Date.now();
  private securityLockActive = false;
  private edgeCyberId: string | null = null;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => PcService))
    private readonly pcService: PcService,
  ) {}

  onModuleInit() {
    const url = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    this.edgeCyberId = process.env.EDGE_CYBER_ID ?? null;

    if (!url || !serviceKey || !this.edgeCyberId) {
      this.logger.warn(
        'SupabaseSync désactivé (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY ou EDGE_CYBER_ID manquant)',
      );
      return;
    }

    this.supabase = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    this.subscribeRealtime();
    this.heartbeatTimer = setInterval(() => {
      void this.runHeartbeat();
    }, HEARTBEAT_INTERVAL_MS);

    this.logger.log(
      `SupabaseSync actif pour cyber ${this.edgeCyberId}`,
    );
  }

  onModuleDestroy() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    if (this.channel && this.supabase) {
      void this.supabase.removeChannel(this.channel);
    }
  }

  getStatus(): { active: boolean; edgeCyberId: string | null } {
    return {
      active: this.supabase !== null && this.edgeCyberId !== null,
      edgeCyberId: this.edgeCyberId,
    };
  }

  private subscribeRealtime() {
    if (!this.supabase || !this.edgeCyberId) return;

    this.channel = this.supabase
      .channel('edge-session-sync')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'SessionOrdinateur',
          filter: `cyberId=eq.${this.edgeCyberId}`,
        },
        (payload) => {
          void this.handleSessionUpdate(
            payload.new as Record<string, unknown>,
            payload.old as Record<string, unknown> | undefined,
          );
        },
      )
      .subscribe((status) => {
        this.logger.log(`Realtime channel: ${status}`);
      });
  }

  private async handleSessionUpdate(
    row: Record<string, unknown>,
    oldRow?: Record<string, unknown>,
  ) {
    if (!this.edgeCyberId) return;

    const source = row.sourceMiseAJour as string | undefined;
    if (source !== SourceMiseAJour.CLOUD) {
      return;
    }

    const numeroPoste = Number(row.numeroPoste);
    const statut = row.statut as StatutPoste;
    const typeSession = row.typeSession as TypeSession | null;
    const oldStatut = oldRow?.statut as StatutPoste | undefined;

    this.logger.log(
      `Relay cloud → PC ${numeroPoste}: ${oldStatut ?? '?'} → ${statut}`,
    );

    if (
      statut === StatutPoste.EN_COURS &&
      typeSession === TypeSession.POSTPAID
    ) {
      this.pcService.sendToPc(this.edgeCyberId, numeroPoste, {
        event: 'unlock_success',
        typeSession: TypeSession.POSTPAID,
      });
      return;
    }

    if (
      statut === StatutPoste.EN_COURS &&
      typeSession === TypeSession.PREPAID
    ) {
      const ticketId = row.ticketActuelId as string | null;
      let tempsRestant: number | null = null;
      if (ticketId) {
        const ticket = await this.prisma.ticket.findUnique({
          where: { id: ticketId },
        });
        tempsRestant = ticket?.tempsRestant ?? null;
      }
      this.pcService.sendToPc(this.edgeCyberId, numeroPoste, {
        event: 'unlock_success',
        typeSession: TypeSession.PREPAID,
      });
      if (tempsRestant !== null) {
        this.pcService.sendToPc(this.edgeCyberId, numeroPoste, {
          event: 'time_update',
          tempsRestant,
          typeSession: TypeSession.PREPAID,
        });
      }
      return;
    }

    if (statut === StatutPoste.A_PAYER || statut === StatutPoste.VERROUILLE) {
      this.pcService.sendToPc(this.edgeCyberId, numeroPoste, {
        event: 'command_lock',
      });
    }
  }

  private async runHeartbeat() {
    if (!this.supabase || !this.edgeCyberId) return;

    try {
      const { error } = await this.supabase
        .from('Cyber')
        .select('id')
        .eq('id', this.edgeCyberId)
        .limit(1)
        .single();

      if (error) {
        throw error;
      }

      this.lastHeartbeatOk = Date.now();

      if (this.securityLockActive) {
        this.logger.log('Connexion Supabase rétablie');
        this.securityLockActive = false;
      }
    } catch (error) {
      const offlineMs = Date.now() - this.lastHeartbeatOk;
      this.logger.warn(
        `Heartbeat Supabase échoué (${Math.round(offlineMs / 1000)}s offline)`,
      );

      if (
        offlineMs >= HEARTBEAT_FAILURE_THRESHOLD_MS &&
        !this.securityLockActive
      ) {
        await this.triggerSecurityLock();
      }
    }
  }

  private async triggerSecurityLock() {
    if (!this.edgeCyberId) return;

    this.securityLockActive = true;
    this.logger.error(
      'Coupure internet > 2 min — verrouillage sécurité sessions POSTPAID',
    );

    const sessions = await this.prisma.sessionOrdinateur.findMany({
      where: {
        cyberId: this.edgeCyberId,
        statut: StatutPoste.EN_COURS,
        typeSession: TypeSession.POSTPAID,
      },
    });

    for (const session of sessions) {
      this.pcService.sendToPc(
        this.edgeCyberId,
        session.numeroPoste,
        { event: 'command_lock' },
      );

      await this.prisma.sessionOrdinateur.update({
        where: { id: session.id },
        data: {
          statut: StatutPoste.VERROUILLE,
          typeSession: null,
          tempsDebut: null,
          tempsFin: null,
          montantDu: null,
          sourceMiseAJour: SourceMiseAJour.LOCAL,
        },
      });
    }
  }
}
