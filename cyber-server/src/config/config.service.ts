import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StatutPoste } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { PcService } from '../pc/pc.service';
import { UpdateConfigDto } from './dto/update-config.dto';

export interface AppConfigDto {
  id: string;
  nom: string;
  nombrePostes: number;
  dureesTicket: number[];
  prixParMinute: number;
}

@Injectable()
export class ConfigService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pcService: PcService,
  ) {}

  private toDto(cyber: {
    id: string;
    nom: string;
    nombrePostes: number;
    dureesTicket: number[];
    prixParMinute: { toNumber(): number } | number;
  }): AppConfigDto {
    return {
      id: cyber.id,
      nom: cyber.nom,
      nombrePostes: cyber.nombrePostes,
      dureesTicket: cyber.dureesTicket,
      prixParMinute:
        typeof cyber.prixParMinute === 'number'
          ? cyber.prixParMinute
          : cyber.prixParMinute.toNumber(),
    };
  }

  async getByCyberId(cyberId: string): Promise<AppConfigDto> {
    const cyber = await this.prisma.cyber.findUnique({
      where: { id: cyberId },
    });
    if (!cyber) {
      throw new NotFoundException('Cyber introuvable');
    }
    return this.toDto(cyber);
  }

  async syncPostes(cyberId: string, nombrePostes: number) {
    const currentCount = await this.prisma.sessionOrdinateur.count({
      where: { cyberId },
    });

    if (nombrePostes > currentCount) {
      for (let poste = 1; poste <= nombrePostes; poste++) {
        await this.prisma.sessionOrdinateur.upsert({
          where: {
            cyberId_numeroPoste: { cyberId, numeroPoste: poste },
          },
          update: {},
          create: {
            cyberId,
            numeroPoste: poste,
            statut: StatutPoste.VERROUILLE,
          },
        });
      }
    } else if (nombrePostes < currentCount) {
      const activeAbove = await this.prisma.sessionOrdinateur.findFirst({
        where: {
          cyberId,
          numeroPoste: { gt: nombrePostes },
          statut: StatutPoste.EN_COURS,
        },
      });

      if (activeAbove) {
        throw new BadRequestException(
          `Impossible de réduire à ${nombrePostes} postes : le PC ${activeAbove.numeroPoste} est en cours d'utilisation`,
        );
      }

      await this.prisma.sessionOrdinateur.deleteMany({
        where: {
          cyberId,
          numeroPoste: { gt: nombrePostes },
          statut: StatutPoste.VERROUILLE,
        },
      });
    }
  }

  async update(cyberId: string, dto: UpdateConfigDto): Promise<AppConfigDto> {
    const current = await this.getByCyberId(cyberId);

    if (
      dto.nombrePostes !== undefined &&
      dto.nombrePostes !== current.nombrePostes
    ) {
      await this.syncPostes(cyberId, dto.nombrePostes);
    }

    const cyber = await this.prisma.cyber.update({
      where: { id: cyberId },
      data: {
        ...(dto.nombrePostes !== undefined && {
          nombrePostes: dto.nombrePostes,
        }),
        ...(dto.dureesTicket !== undefined && {
          dureesTicket: dto.dureesTicket,
        }),
        ...(dto.nom !== undefined && { nom: dto.nom }),
        ...(dto.prixParMinute !== undefined && {
          prixParMinute: dto.prixParMinute,
        }),
      },
    });

    if (dto.nombrePostes !== undefined) {
      await this.pcService.broadcastGlobalUpdate(cyberId);
    }

    return this.toDto(cyber);
  }
}
