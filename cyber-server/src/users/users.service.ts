import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

const staffInclude = {
  cybers: {
    include: {
      cyber: { select: { id: true, nom: true } },
    },
  },
} as const;

export interface StaffDto {
  id: string;
  username: string;
  role: Role;
  isActive: boolean;
  createdAt: Date;
  cyberIds: string[];
  cybers: { id: string; nom: string }[];
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private toStaffDto(user: {
    id: string;
    username: string;
    role: Role;
    isActive: boolean;
    createdAt: Date;
    cybers: { cyber: { id: string; nom: string } }[];
  }): StaffDto {
    const cybers = user.cybers.map((uc) => ({
      id: uc.cyber.id,
      nom: uc.cyber.nom,
    }));
    return {
      id: user.id,
      username: user.username,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
      cyberIds: cybers.map((c) => c.id),
      cybers,
    };
  }

  private async validateCyberIds(cyberIds: string[]) {
    const uniqueIds = [...new Set(cyberIds)];
    const cybers = await this.prisma.cyber.findMany({
      where: { id: { in: uniqueIds } },
      select: { id: true, isActive: true, archivedAt: true },
    });
    if (cybers.length !== uniqueIds.length) {
      throw new BadRequestException('Un ou plusieurs cybers sont introuvables');
    }
    const invalid = cybers.find((c) => !c.isActive || c.archivedAt !== null);
    if (invalid) {
      throw new BadRequestException(
        'Impossible d\'affecter un employé à un établissement désactivé ou archivé',
      );
    }
    return uniqueIds;
  }

  private async findStaffOrThrow(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: staffInclude,
    });

    if (!user || user.role !== Role.STAFF) {
      throw new NotFoundException('Employé introuvable');
    }

    return user;
  }

  async findAll(includeInactive = false) {
    const users = await this.prisma.user.findMany({
      where: {
        role: Role.STAFF,
        ...(includeInactive ? {} : { isActive: true }),
      },
      orderBy: { username: 'asc' },
      include: staffInclude,
    });

    return { staff: users.map((u) => this.toStaffDto(u)) };
  }

  async findOne(id: string) {
    const user = await this.findStaffOrThrow(id);
    return { staff: this.toStaffDto(user) };
  }

  async create(dto: CreateStaffDto) {
    const existing = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });
    if (existing) {
      throw new ConflictException('Identifiant déjà utilisé');
    }

    const cyberIds = await this.validateCyberIds(dto.cyberIds);
    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        username: dto.username.trim(),
        passwordHash,
        role: Role.STAFF,
        isActive: true,
        cybers: {
          create: cyberIds.map((cyberId) => ({ cyberId })),
        },
      },
      include: staffInclude,
    });

    return { staff: this.toStaffDto(user) };
  }

  async update(id: string, dto: UpdateStaffDto) {
    await this.findStaffOrThrow(id);

    if (dto.cyberIds !== undefined) {
      await this.validateCyberIds(dto.cyberIds);
    }

    const data: {
      passwordHash?: string;
      isActive?: boolean;
    } = {};

    if (dto.password) {
      data.passwordHash = await bcrypt.hash(dto.password, 10);
    }
    if (dto.isActive !== undefined) {
      data.isActive = dto.isActive;
    }

    const user = await this.prisma.$transaction(async (tx) => {
      if (dto.cyberIds !== undefined) {
        await tx.userCyber.deleteMany({ where: { userId: id } });
        await tx.userCyber.createMany({
          data: dto.cyberIds.map((cyberId) => ({ userId: id, cyberId })),
        });
      }

      return tx.user.update({
        where: { id },
        data,
        include: staffInclude,
      });
    });

    return { staff: this.toStaffDto(user) };
  }

  async deactivate(id: string) {
    await this.findStaffOrThrow(id);

    const user = await this.prisma.user.update({
      where: { id },
      data: { isActive: false },
      include: staffInclude,
    });

    return { staff: this.toStaffDto(user) };
  }
}
