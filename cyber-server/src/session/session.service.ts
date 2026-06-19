import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import {
  StatutPoste,
  TypePaiement,
  TypeSession,
} from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { PcService } from '../pc/pc.service';
import {
  computeElapsedMinutes,
  computeMontantFromMinutes,
  toHourlyRate,
} from './session-billing';

@Injectable()
export class SessionService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => PcService))
    private readonly pcService: PcService,
  ) {}

  private async getSessionOrThrow(cyberId: string, numeroPoste: number) {
    const session = await this.prisma.sessionOrdinateur.findUnique({
      where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
    });
    if (!session) {
      throw new NotFoundException(`Poste ${numeroPoste} introuvable`);
    }
    return session;
  }

  async demarrerSessionPostPayee(cyberId: string, numeroPoste: number) {
    const session = await this.getSessionOrThrow(cyberId, numeroPoste);

    if (session.statut === StatutPoste.A_PAYER) {
      throw new BadRequestException(
        'Poste en attente de paiement — encaissez avant réutilisation',
      );
    }
    if (session.statut === StatutPoste.EN_COURS) {
      throw new BadRequestException('Poste déjà en cours d\'utilisation');
    }

    const cyber = await this.prisma.cyber.findUnique({
      where: { id: cyberId },
    });
    if (!cyber) {
      throw new NotFoundException('Cyber introuvable');
    }

    const baseTarifHoraire = toHourlyRate(cyber.prixParMinute);
    const tempsDebut = new Date();

    await this.prisma.sessionOrdinateur.update({
      where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
      data: {
        statut: StatutPoste.EN_COURS,
        typeSession: TypeSession.POSTPAID,
        baseTarifHoraire,
        tempsDebut,
        tempsFin: null,
        montantDu: null,
        ticketActuelId: null,
      },
    });

    this.pcService.sendToPc(cyberId, numeroPoste, {
      event: 'unlock_success',
      typeSession: TypeSession.POSTPAID,
    });
    await this.pcService.broadcastGlobalUpdate(cyberId);

    return { success: true, numeroPoste, typeSession: TypeSession.POSTPAID };
  }

  async arreterSessionPostPayee(cyberId: string, numeroPoste: number) {
    const session = await this.getSessionOrThrow(cyberId, numeroPoste);

    if (
      session.statut !== StatutPoste.EN_COURS ||
      session.typeSession !== TypeSession.POSTPAID ||
      !session.tempsDebut
    ) {
      throw new BadRequestException(
        'Aucune session libre active sur ce poste',
      );
    }

    const tempsFin = new Date();
    const elapsedMinutes = computeElapsedMinutes(session.tempsDebut, tempsFin);
    const hourly = Number(session.baseTarifHoraire);
    const montantDu = computeMontantFromMinutes(hourly, elapsedMinutes);

    await this.prisma.sessionOrdinateur.update({
      where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
      data: {
        statut: StatutPoste.A_PAYER,
        tempsFin,
        montantDu,
      },
    });

    this.pcService.sendToPc(cyberId, numeroPoste, { event: 'command_lock' });
    await this.pcService.broadcastGlobalUpdate(cyberId);

    return {
      success: true,
      numeroPoste,
      statut: StatutPoste.A_PAYER,
      elapsedMinutes,
      montantDu,
    };
  }

  async encaisserSessionPostPayee(
    cyberId: string,
    numeroPoste: number,
    employeId: string,
    typePaiement: TypePaiement,
  ) {
    const session = await this.getSessionOrThrow(cyberId, numeroPoste);

    if (session.statut !== StatutPoste.A_PAYER) {
      throw new BadRequestException('Ce poste n\'est pas en attente de paiement');
    }
    if (!session.montantDu || Number(session.montantDu) <= 0) {
      throw new BadRequestException('Montant dû invalide');
    }

    const montant = Number(session.montantDu);
    const hourly = Number(session.baseTarifHoraire);
    const elapsedMinutes =
      session.tempsDebut && session.tempsFin
        ? computeElapsedMinutes(session.tempsDebut, session.tempsFin)
        : 0;

    await this.prisma.$transaction(async (tx) => {
      await tx.transactionCaisse.create({
        data: {
          cyberId,
          montant,
          typePaiement,
          description: `Session libre poste ${numeroPoste} — ${elapsedMinutes} min @ ${hourly} Ar/h`,
          employeId,
        },
      });

      await tx.sessionOrdinateur.update({
        where: { cyberId_numeroPoste: { cyberId, numeroPoste } },
        data: {
          statut: StatutPoste.VERROUILLE,
          typeSession: null,
          ticketActuelId: null,
          baseTarifHoraire: 2,
          tempsDebut: null,
          tempsFin: null,
          montantDu: null,
        },
      });
    });

    await this.pcService.broadcastGlobalUpdate(cyberId);

    return {
      success: true,
      numeroPoste,
      montantEncaisse: montant,
    };
  }
}
