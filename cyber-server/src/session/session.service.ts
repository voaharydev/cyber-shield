import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import {
  SourceMiseAJour,
  StatutPoste,
  TypePaiement,
  TypeSession,
} from '@cyber-shield/db';
import {
  SessionDomainError,
  encaisserPostpaidSession,
  resetPoste,
  startPostpaidSession,
  stopPostpaidSession,
} from '@cyber-shield/domain';
import { PrismaService } from '../prisma/prisma.service';
import { PcService } from '../pc/pc.service';

@Injectable()
export class SessionService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => PcService))
    private readonly pcService: PcService,
  ) {}

  private mapDomainError(error: unknown): never {
    if (error instanceof SessionDomainError) {
      throw new BadRequestException(error.message);
    }
    throw error;
  }

  async demarrerSessionPostPayee(cyberId: string, numeroPoste: number) {
    try {
      const result = await this.prisma.$transaction((tx) =>
        startPostpaidSession(
          tx,
          cyberId,
          numeroPoste,
          SourceMiseAJour.LOCAL,
        ),
      );

      this.pcService.sendToPc(cyberId, numeroPoste, {
        event: 'unlock_success',
        typeSession: TypeSession.POSTPAID,
      });

      return result;
    } catch (error) {
      this.mapDomainError(error);
    }
  }

  async arreterSessionPostPayee(cyberId: string, numeroPoste: number) {
    try {
      const result = await this.prisma.$transaction((tx) =>
        stopPostpaidSession(
          tx,
          cyberId,
          numeroPoste,
          SourceMiseAJour.LOCAL,
        ),
      );

      this.pcService.sendToPc(cyberId, numeroPoste, { event: 'command_lock' });

      return result;
    } catch (error) {
      this.mapDomainError(error);
    }
  }

  async encaisserSessionPostPayee(
    cyberId: string,
    numeroPoste: number,
    employeId: string,
    typePaiement: TypePaiement,
  ) {
    try {
      return await this.prisma.$transaction((tx) =>
        encaisserPostpaidSession(
          tx,
          cyberId,
          numeroPoste,
          employeId,
          typePaiement,
          SourceMiseAJour.LOCAL,
        ),
      );
    } catch (error) {
      this.mapDomainError(error);
    }
  }

  async reinitialiserPoste(cyberId: string, numeroPoste: number) {
    await this.pcService.kickPcConnection(cyberId, numeroPoste);

    try {
      const result = await this.prisma.$transaction((tx) =>
        resetPoste(tx, cyberId, numeroPoste, SourceMiseAJour.LOCAL),
      );

      if (result.action === 'prepaid_restored') {
        this.pcService.sendToPc(cyberId, numeroPoste, { event: 'command_lock' });
      } else if (result.action === 'postpaid_stopped') {
        this.pcService.sendToPc(cyberId, numeroPoste, { event: 'command_lock' });
      }

      return result;
    } catch (error) {
      this.mapDomainError(error);
    }
  }
}
