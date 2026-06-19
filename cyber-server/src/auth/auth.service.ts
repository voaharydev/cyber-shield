import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { JwtPayload, RequestUser } from './auth.types';
import { LoginDto } from './dto/login.dto';

const userWithCybersInclude = {
  cybers: {
    include: {
      cyber: {
        select: { id: true, nom: true, isActive: true, archivedAt: true },
      },
    },
  },
} as const;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private toRequestUser(
    user: {
      id: string;
      username: string;
      role: JwtPayload['role'];
      isActive: boolean;
      cybers: { cyber: { id: string; nom: string; isActive: boolean; archivedAt: Date | null } }[];
    },
  ): RequestUser {
    const cybers = user.cybers
      .filter((uc) => uc.cyber.isActive && uc.cyber.archivedAt === null)
      .map((uc) => ({
        id: uc.cyber.id,
        nom: uc.cyber.nom,
      }));
    return {
      id: user.id,
      username: user.username,
      role: user.role,
      isActive: user.isActive,
      cyberIds: cybers.map((c) => c.id),
      cybers,
    };
  }

  private async findUserWithCybers(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: userWithCybersInclude,
    });
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { username: dto.username },
      include: userWithCybersInclude,
    });

    if (!user) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Compte désactivé');
    }

    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const payload: JwtPayload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: this.toRequestUser(user),
    };
  }

  async getProfile(userId: string): Promise<RequestUser> {
    const user = await this.findUserWithCybers(userId);

    if (!user) {
      throw new UnauthorizedException('Utilisateur introuvable');
    }

    return this.toRequestUser(user);
  }
}
