import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  FideliteConfig,
  Prisma,
  TypeMouvementFidelite,
} from '@cyber-shield/db';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateFideliteConfigDto } from './dto/update-fidelite-config.dto';
import { CreateClientDto } from './dto/create-client.dto';
import {
  EchangePointsDto,
  EchangePointsType,
} from './dto/echange-points.dto';
import { ListMouvementsDto } from './dto/echange-points.dto';
import {
  FIDELITE_CONFIG_ID,
  formatPhoneDisplay,
  normalizePhone,
} from './utils/normalize-phone';

export interface FideliteConfigDto {
  pointsParMinuteAchat: number;
  pointsPourMinuteGratuite: number;
  pointsPour100Ar: number;
  actif: boolean;
}

export interface ClientFideliteDto {
  id: string;
  telephone: string;
  telephoneDisplay: string;
  nom: string | null;
  soldePoints: number;
  isActive: boolean;
}

export interface VenteFidelitePlan {
  clientId: string | null;
  tempsInitialAchete: number;
  tempsInitialTicket: number;
  minutesBonus: number;
  montant: number;
  reductionAr: number;
  pointsGagnes: number;
  pointsUtilises: number;
  echangeType: TypeMouvementFidelite | null;
  caisseDescription: string;
}

type TxClient = Parameters<Parameters<PrismaService['$transaction']>[0]>[0];

@Injectable()
export class FideliteService {
  constructor(private readonly prisma: PrismaService) {}

  private toConfigDto(config: FideliteConfig): FideliteConfigDto {
    return {
      pointsParMinuteAchat: config.pointsParMinuteAchat,
      pointsPourMinuteGratuite: config.pointsPourMinuteGratuite,
      pointsPour100Ar: config.pointsPour100Ar,
      actif: config.actif,
    };
  }

  async ensureConfig(): Promise<FideliteConfig> {
    return this.prisma.fideliteConfig.upsert({
      where: { id: FIDELITE_CONFIG_ID },
      update: {},
      create: {
        id: FIDELITE_CONFIG_ID,
        pointsParMinuteAchat: 1,
        pointsPourMinuteGratuite: 10,
        pointsPour100Ar: 5,
        actif: true,
      },
    });
  }

  async getConfig(): Promise<FideliteConfigDto> {
    const config = await this.ensureConfig();
    return this.toConfigDto(config);
  }

  async updateConfig(dto: UpdateFideliteConfigDto): Promise<FideliteConfigDto> {
    const config = await this.prisma.fideliteConfig.update({
      where: { id: FIDELITE_CONFIG_ID },
      data: dto,
    });
    return this.toConfigDto(config);
  }

  async getSolde(clientId: string, tx?: TxClient): Promise<number> {
    const db = tx ?? this.prisma;
    const result = await db.mouvementFidelite.aggregate({
      where: { clientId },
      _sum: { points: true },
    });
    return result._sum.points ?? 0;
  }

  private async toClientDto(
    client: { id: string; telephone: string; nom: string | null; isActive: boolean },
    tx?: TxClient,
  ): Promise<ClientFideliteDto> {
    const soldePoints = await this.getSolde(client.id, tx);
    return {
      id: client.id,
      telephone: client.telephone,
      telephoneDisplay: formatPhoneDisplay(client.telephone),
      nom: client.nom,
      soldePoints,
      isActive: client.isActive,
    };
  }

  async lookupByTelephone(telephone: string) {
    const normalized = normalizePhone(telephone);
    const config = await this.getConfig();

    const client = await this.prisma.clientFidelite.findUnique({
      where: { telephone: normalized },
    });

    if (!client) {
      return { client: null, config };
    }

    if (!client.isActive) {
      throw new BadRequestException('Client fidélité désactivé');
    }

    return {
      client: await this.toClientDto(client),
      config,
    };
  }

  async createClient(dto: CreateClientDto): Promise<ClientFideliteDto> {
    const telephone = normalizePhone(dto.telephone);

    const existing = await this.prisma.clientFidelite.findUnique({
      where: { telephone },
    });

    if (existing) {
      if (!existing.isActive) {
        const restored = await this.prisma.clientFidelite.update({
          where: { id: existing.id },
          data: { isActive: true, nom: dto.nom?.trim() || existing.nom },
        });
        return this.toClientDto(restored);
      }
      throw new BadRequestException('Ce numéro est déjà inscrit au programme');
    }

    const client = await this.prisma.clientFidelite.create({
      data: {
        telephone,
        nom: dto.nom?.trim() || null,
      },
    });

    return this.toClientDto(client);
  }

  async findClientByTelephone(telephone: string) {
    const normalized = normalizePhone(telephone);
    return this.prisma.clientFidelite.findUnique({
      where: { telephone: normalized },
    });
  }

  async listMouvements(clientId: string, dto: ListMouvementsDto) {
    const client = await this.prisma.clientFidelite.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      throw new NotFoundException('Client fidélité introuvable');
    }

    const limit = dto.limit ?? 50;
    const offset = dto.offset ?? 0;

    const [mouvements, total, soldePoints] = await Promise.all([
      this.prisma.mouvementFidelite.findMany({
        where: { clientId },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
        include: {
          cyber: { select: { nom: true } },
          employe: { select: { username: true } },
        },
      }),
      this.prisma.mouvementFidelite.count({ where: { clientId } }),
      this.getSolde(clientId),
    ]);

    return {
      client: await this.toClientDto(client),
      soldePoints,
      mouvements: mouvements.map((m) => ({
        id: m.id,
        type: m.type,
        points: m.points,
        description: m.description,
        createdAt: m.createdAt,
        cyberNom: m.cyber.nom,
        employeUsername: m.employe.username,
        ticketId: m.ticketId,
      })),
      total,
      limit,
      offset,
    };
  }

  computeVentePlan(
    config: FideliteConfigDto,
    tempsInitialAchete: number,
    prixParMinute: number,
    clientId: string | null,
    echangePoints?: EchangePointsDto,
  ): Omit<
    VenteFidelitePlan,
    'clientId' | 'caisseDescription'
  > & { caisseDescriptionParts: string[] } {
    const brutMontant = tempsInitialAchete * prixParMinute;
    let minutesBonus = 0;
    let reductionAr = 0;
    let pointsUtilises = 0;
    let pointsGagnes = 0;
    let echangeType: TypeMouvementFidelite | null = null;
    const caisseDescriptionParts: string[] = [];

    let montant = brutMontant;
    let tempsInitialTicket = tempsInitialAchete;

    if (clientId && config.actif) {
      pointsGagnes = tempsInitialAchete * config.pointsParMinuteAchat;

      if (echangePoints && echangePoints.points > 0) {
        pointsUtilises = echangePoints.points;

        if (echangePoints.type === EchangePointsType.MINUTES) {
          minutesBonus = Math.floor(
            pointsUtilises / config.pointsPourMinuteGratuite,
          );
          if (minutesBonus <= 0) {
            throw new BadRequestException(
              `Points insuffisants pour des minutes gratuites (min ${config.pointsPourMinuteGratuite} pts)`,
            );
          }
          const effectivePoints = minutesBonus * config.pointsPourMinuteGratuite;
          if (effectivePoints !== pointsUtilises) {
            throw new BadRequestException(
              `Les points doivent être un multiple de ${config.pointsPourMinuteGratuite} pour l'échange minutes`,
            );
          }
          tempsInitialTicket = tempsInitialAchete + minutesBonus;
          echangeType = TypeMouvementFidelite.ECHANGE_MINUTES;
          caisseDescriptionParts.push(
            `Fidélité: +${pointsGagnes} pts, -${pointsUtilises} pts → ${minutesBonus} min bonus`,
          );
        } else if (echangePoints.type === EchangePointsType.REDUCTION) {
          const units = Math.floor(pointsUtilises / config.pointsPour100Ar);
          if (units <= 0) {
            throw new BadRequestException(
              `Points insuffisants pour une réduction (min ${config.pointsPour100Ar} pts)`,
            );
          }
          const effectivePoints = units * config.pointsPour100Ar;
          if (effectivePoints !== pointsUtilises) {
            throw new BadRequestException(
              `Les points doivent être un multiple de ${config.pointsPour100Ar} pour la réduction Ar`,
            );
          }
          reductionAr = units * 100;
          montant = Math.max(0, brutMontant - reductionAr);
          echangeType = TypeMouvementFidelite.ECHANGE_REDUCTION;
          caisseDescriptionParts.push(
            `Fidélité: +${pointsGagnes} pts, -${pointsUtilises} pts → -${reductionAr} Ar`,
          );
        }
      } else if (pointsGagnes > 0) {
        caisseDescriptionParts.push(`Fidélité: +${pointsGagnes} pts`);
      }
    }

    return {
      tempsInitialAchete,
      tempsInitialTicket,
      minutesBonus,
      montant,
      reductionAr,
      pointsGagnes,
      pointsUtilises,
      echangeType,
      caisseDescriptionParts,
    };
  }

  async prepareVente(
    tempsInitialAchete: number,
    prixParMinute: number,
    telephone?: string,
    echangePoints?: EchangePointsDto,
  ): Promise<VenteFidelitePlan> {
    const config = await this.getConfig();
    let clientId: string | null = null;

    if (telephone?.trim()) {
      const client = await this.findClientByTelephone(telephone);
      if (!client) {
        throw new NotFoundException(
          'Client fidélité introuvable — inscrivez le numéro avant la vente',
        );
      }
      if (!client.isActive) {
        throw new BadRequestException('Client fidélité désactivé');
      }
      clientId = client.id;
    }

    if (echangePoints && !clientId) {
      throw new BadRequestException(
        'Un client fidélité est requis pour utiliser des points',
      );
    }

    const plan = this.computeVentePlan(
      config,
      tempsInitialAchete,
      prixParMinute,
      clientId,
      echangePoints,
    );

    if (clientId && plan.pointsUtilises > 0) {
      const solde = await this.getSolde(clientId);
      if (solde < plan.pointsUtilises) {
        throw new BadRequestException(
          `Solde insuffisant (${solde} pts disponibles)`,
        );
      }
    }

    const baseDesc = `Vente ticket ${tempsInitialAchete} min @ ${prixParMinute} Ar/min`;
    const caisseDescription =
      plan.caisseDescriptionParts.length > 0
        ? `${baseDesc} | ${plan.caisseDescriptionParts.join(' | ')}`
        : baseDesc;

    return {
      clientId,
      ...plan,
      caisseDescription,
    };
  }

  async applyMouvementsInTransaction(
    tx: TxClient,
    params: {
      cyberId: string;
      clientId: string;
      employeId: string;
      ticketId: string;
      pointsGagnes: number;
      pointsUtilises: number;
      echangeType: TypeMouvementFidelite | null;
      minutesBonus: number;
      reductionAr: number;
    },
  ) {
    const solde = await this.getSolde(params.clientId, tx);
    if (params.pointsUtilises > 0 && solde < params.pointsUtilises) {
      throw new BadRequestException('Solde fidélité insuffisant');
    }

    if (params.pointsUtilises > 0 && params.echangeType) {
      const spendDesc =
        params.echangeType === TypeMouvementFidelite.ECHANGE_MINUTES
          ? `Échange ${params.pointsUtilises} pts → ${params.minutesBonus} min bonus`
          : `Échange ${params.pointsUtilises} pts → -${params.reductionAr} Ar`;

      await tx.mouvementFidelite.create({
        data: {
          cyberId: params.cyberId,
          clientId: params.clientId,
          type: params.echangeType,
          points: -params.pointsUtilises,
          ticketId: params.ticketId,
          employeId: params.employeId,
          description: spendDesc,
        },
      });
    }

    if (params.pointsGagnes > 0) {
      await tx.mouvementFidelite.create({
        data: {
          cyberId: params.cyberId,
          clientId: params.clientId,
          type: TypeMouvementFidelite.GAIN_ACHAT,
          points: params.pointsGagnes,
          ticketId: params.ticketId,
          employeId: params.employeId,
          description: `Gain achat ${params.pointsGagnes} pts`,
        },
      });
    }
  }
}
