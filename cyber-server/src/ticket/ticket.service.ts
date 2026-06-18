import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, StatutTicket } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '../config/config.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { ListTicketsDto } from './dto/list-tickets.dto';

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const ticketInclude = {
  creePar: { select: { username: true } },
  sessions: {
    where: { ticketActuelId: { not: null } },
    select: { numeroPoste: true },
  },
} satisfies Prisma.TicketInclude;

type TicketWithRelations = Prisma.TicketGetPayload<{
  include: typeof ticketInclude;
}>;

export interface TicketDetailDto {
  id: string;
  codeUnique: string;
  statut: StatutTicket;
  statutLabel: string;
  tempsInitial: number;
  tempsRestant: number;
  createdAt: Date;
  creePar: { username: string };
  numeroPoste: number | null;
}

@Injectable()
export class TicketService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  private toStatutLabel(statut: StatutTicket): string {
    switch (statut) {
      case StatutTicket.VALIDE:
        return 'Non utilisé';
      case StatutTicket.ACTIVE:
        return 'En cours';
      case StatutTicket.EXPIRE:
        return 'Expiré';
    }
  }

  private toTicketDetail(ticket: TicketWithRelations): TicketDetailDto {
    return {
      id: ticket.id,
      codeUnique: ticket.codeUnique,
      statut: ticket.statut,
      statutLabel: this.toStatutLabel(ticket.statut),
      tempsInitial: ticket.tempsInitial,
      tempsRestant: ticket.tempsRestant,
      createdAt: ticket.createdAt,
      creePar: { username: ticket.creePar.username },
      numeroPoste: ticket.sessions[0]?.numeroPoste ?? null,
    };
  }

  private buildWhere(
    cyberId: string,
    dto: ListTicketsDto,
  ): Prisma.TicketWhereInput {
    const where: Prisma.TicketWhereInput = { cyberId };

    if (dto.statut) {
      where.statut = dto.statut;
    }

    if (dto.q?.trim()) {
      where.codeUnique = {
        contains: dto.q.trim(),
        mode: 'insensitive',
      };
    }

    return where;
  }

  async findAll(cyberId: string, dto: ListTicketsDto) {
    const where = this.buildWhere(cyberId, dto);
    const limit = dto.limit ?? 50;
    const offset = dto.offset ?? 0;

    const [tickets, total] = await Promise.all([
      this.prisma.ticket.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
        include: ticketInclude,
      }),
      this.prisma.ticket.count({ where }),
    ]);

    return {
      tickets: tickets.map((t) => this.toTicketDetail(t)),
      total,
      limit,
      offset,
    };
  }

  async findByCode(cyberId: string, code: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: {
        cyberId_codeUnique: {
          cyberId,
          codeUnique: code.toUpperCase(),
        },
      },
      include: ticketInclude,
    });

    if (!ticket) {
      throw new NotFoundException(`Ticket ${code} introuvable`);
    }

    return { ticket: this.toTicketDetail(ticket) };
  }

  private generateCode(): string {
    let suffix = '';
    for (let i = 0; i < 5; i++) {
      suffix += CODE_CHARS.charAt(
        Math.floor(Math.random() * CODE_CHARS.length),
      );
    }
    return `TCK-${suffix}`;
  }

  private async generateUniqueCode(
    cyberId: string,
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
  ): Promise<string> {
    for (let attempt = 0; attempt < 10; attempt++) {
      const codeUnique = this.generateCode();
      const existing = await tx.ticket.findUnique({
        where: { cyberId_codeUnique: { cyberId, codeUnique } },
      });
      if (!existing) {
        return codeUnique;
      }
    }
    throw new InternalServerErrorException(
      'Impossible de générer un code ticket unique',
    );
  }

  async createTicket(cyberId: string, employeId: string, dto: CreateTicketDto) {
    const config = await this.configService.getByCyberId(cyberId);
    const montant = config.prixParMinute * dto.tempsInitial;

    return this.prisma.$transaction(async (tx) => {
      await tx.transactionCaisse.create({
        data: {
          cyberId,
          montant,
          typePaiement: dto.typePaiement,
          description: `Vente ticket ${dto.tempsInitial} min @ ${config.prixParMinute} Ar/min`,
          employeId,
        },
      });

      const codeUnique = await this.generateUniqueCode(cyberId, tx);

      const ticket = await tx.ticket.create({
        data: {
          cyberId,
          codeUnique,
          tempsInitial: dto.tempsInitial,
          tempsRestant: dto.tempsInitial,
          statut: StatutTicket.VALIDE,
          creeParId: employeId,
        },
      });

      return {
        ticket: {
          id: ticket.id,
          codeUnique: ticket.codeUnique,
          tempsInitial: ticket.tempsInitial,
          tempsRestant: ticket.tempsRestant,
          statut: ticket.statut,
        },
      };
    });
  }
}
