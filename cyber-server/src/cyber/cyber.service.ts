import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StatutPoste } from '@cyber-shield/db';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '../config/config.service';
import { CreateCyberDto } from './dto/create-cyber.dto';
import { DuplicateCyberDto } from './dto/duplicate-cyber.dto';
import { UpdateCyberDto } from './dto/update-cyber.dto';

export interface CyberSummaryDto {
  id: string;
  nom: string;
  nombrePostes: number;
  dureesTicket: number[];
  prixParMinute: number;
  isActive: boolean;
  archivedAt: Date | null;
  createdAt: Date;
}

type CyberRecord = {
  id: string;
  nom: string;
  nombrePostes: number;
  dureesTicket: number[];
  prixParMinute: { toNumber(): number } | number;
  isActive: boolean;
  archivedAt: Date | null;
  createdAt: Date;
};

@Injectable()
export class CyberService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  private toSummary(cyber: CyberRecord): CyberSummaryDto {
    return {
      id: cyber.id,
      nom: cyber.nom,
      nombrePostes: cyber.nombrePostes,
      dureesTicket: cyber.dureesTicket,
      prixParMinute:
        typeof cyber.prixParMinute === 'number'
          ? cyber.prixParMinute
          : cyber.prixParMinute.toNumber(),
      isActive: cyber.isActive,
      archivedAt: cyber.archivedAt,
      createdAt: cyber.createdAt,
    };
  }

  private buildListWhere(options?: {
    includeInactive?: boolean;
    includeArchived?: boolean;
  }) {
    const includeInactive = options?.includeInactive ?? false;
    const includeArchived = options?.includeArchived ?? false;

    if (includeInactive && includeArchived) {
      return {};
    }
    if (includeInactive && !includeArchived) {
      return { archivedAt: null };
    }
    if (!includeInactive && includeArchived) {
      return { archivedAt: { not: null } };
    }
    return { isActive: true, archivedAt: null };
  }

  private async findCyberOrThrow(id: string): Promise<CyberRecord> {
    const cyber = await this.prisma.cyber.findUnique({ where: { id } });
    if (!cyber) {
      throw new NotFoundException('Cyber introuvable');
    }
    return cyber;
  }

  private async assertNoActiveSessions(cyberId: string) {
    const active = await this.prisma.sessionOrdinateur.findFirst({
      where: {
        cyberId,
        statut: { in: [StatutPoste.EN_COURS, StatutPoste.A_PAYER] },
      },
      select: { numeroPoste: true, statut: true },
    });
    if (active) {
      throw new BadRequestException(
        `Impossible : le poste ${active.numeroPoste} est ${active.statut === StatutPoste.A_PAYER ? 'en attente de paiement' : 'en cours d\'utilisation'}`,
      );
    }
  }

  async findAll(options?: {
    includeInactive?: boolean;
    includeArchived?: boolean;
  }): Promise<{ cybers: CyberSummaryDto[] }> {
    const cybers = await this.prisma.cyber.findMany({
      where: this.buildListWhere(options),
      orderBy: { nom: 'asc' },
    });
    return { cybers: cybers.map((c) => this.toSummary(c)) };
  }

  async findOne(id: string): Promise<CyberSummaryDto> {
    const cyber = await this.findCyberOrThrow(id);
    return this.toSummary(cyber);
  }

  async create(dto: CreateCyberDto): Promise<CyberSummaryDto> {
    const cyber = await this.prisma.cyber.create({
      data: {
        nom: dto.nom.trim(),
        nombrePostes: dto.nombrePostes,
        dureesTicket: [...dto.dureesTicket].sort((a, b) => a - b),
        prixParMinute: dto.prixParMinute,
        isActive: true,
      },
    });

    await this.configService.syncPostes(cyber.id, cyber.nombrePostes);

    return this.toSummary(cyber);
  }

  async update(id: string, dto: UpdateCyberDto): Promise<CyberSummaryDto> {
    const current = await this.findCyberOrThrow(id);

    if (dto.nombrePostes !== undefined && dto.nombrePostes !== current.nombrePostes) {
      await this.configService.syncPostes(id, dto.nombrePostes);
    }

    const cyber = await this.prisma.cyber.update({
      where: { id },
      data: {
        ...(dto.nom !== undefined && { nom: dto.nom.trim() }),
        ...(dto.nombrePostes !== undefined && {
          nombrePostes: dto.nombrePostes,
        }),
        ...(dto.dureesTicket !== undefined && {
          dureesTicket: [...dto.dureesTicket].sort((a, b) => a - b),
        }),
        ...(dto.prixParMinute !== undefined && {
          prixParMinute: dto.prixParMinute,
        }),
      },
    });

    return this.toSummary(cyber);
  }

  async deactivate(id: string): Promise<CyberSummaryDto> {
    await this.findCyberOrThrow(id);
    await this.assertNoActiveSessions(id);

    const cyber = await this.prisma.cyber.update({
      where: { id },
      data: { isActive: false },
    });

    return this.toSummary(cyber);
  }

  async archive(id: string): Promise<CyberSummaryDto> {
    await this.findCyberOrThrow(id);
    await this.assertNoActiveSessions(id);

    const cyber = await this.prisma.cyber.update({
      where: { id },
      data: {
        isActive: false,
        archivedAt: new Date(),
      },
    });

    return this.toSummary(cyber);
  }

  async reactivate(id: string): Promise<CyberSummaryDto> {
    await this.findCyberOrThrow(id);

    const cyber = await this.prisma.cyber.update({
      where: { id },
      data: {
        isActive: true,
        archivedAt: null,
      },
    });

    return this.toSummary(cyber);
  }

  async duplicate(id: string, dto: DuplicateCyberDto): Promise<CyberSummaryDto> {
    const source = await this.findCyberOrThrow(id);
    const nom = dto.nom?.trim() || `${source.nom} (copie)`;

    const prixParMinute =
      typeof source.prixParMinute === 'number'
        ? source.prixParMinute
        : source.prixParMinute.toNumber();

    const cyber = await this.prisma.cyber.create({
      data: {
        nom,
        nombrePostes: source.nombrePostes,
        dureesTicket: [...source.dureesTicket],
        prixParMinute,
        isActive: true,
      },
    });

    await this.configService.syncPostes(cyber.id, cyber.nombrePostes);

    return this.toSummary(cyber);
  }

  async assertCyberOperational(id: string): Promise<void> {
    const cyber = await this.prisma.cyber.findUnique({
      where: { id },
      select: { isActive: true },
    });
    if (!cyber) {
      throw new NotFoundException('Cyber introuvable');
    }
    if (!cyber.isActive) {
      throw new BadRequestException('Établissement désactivé ou archivé');
    }
  }
}
