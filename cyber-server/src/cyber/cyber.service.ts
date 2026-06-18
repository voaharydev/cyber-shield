import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '../config/config.service';
import { CreateCyberDto } from './dto/create-cyber.dto';

export interface CyberSummaryDto {
  id: string;
  nom: string;
  nombrePostes: number;
  prixParMinute: number;
  createdAt: Date;
}

@Injectable()
export class CyberService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  private toSummary(cyber: {
    id: string;
    nom: string;
    nombrePostes: number;
    prixParMinute: { toNumber(): number } | number;
    createdAt: Date;
  }): CyberSummaryDto {
    return {
      id: cyber.id,
      nom: cyber.nom,
      nombrePostes: cyber.nombrePostes,
      prixParMinute:
        typeof cyber.prixParMinute === 'number'
          ? cyber.prixParMinute
          : cyber.prixParMinute.toNumber(),
      createdAt: cyber.createdAt,
    };
  }

  async findAll(): Promise<{ cybers: CyberSummaryDto[] }> {
    const cybers = await this.prisma.cyber.findMany({
      orderBy: { nom: 'asc' },
    });
    return { cybers: cybers.map((c) => this.toSummary(c)) };
  }

  async create(dto: CreateCyberDto): Promise<CyberSummaryDto> {
    const cyber = await this.prisma.cyber.create({
      data: {
        nom: dto.nom.trim(),
        nombrePostes: dto.nombrePostes,
        dureesTicket: [...dto.dureesTicket].sort((a, b) => a - b),
        prixParMinute: dto.prixParMinute,
      },
    });

    await this.configService.syncPostes(cyber.id, cyber.nombrePostes);

    return this.toSummary(cyber);
  }
}
