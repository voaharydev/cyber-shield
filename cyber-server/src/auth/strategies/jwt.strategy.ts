import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtPayload, RequestUser } from '../auth.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'cyber-dev-secret-change-me',
    });
  }

  async validate(payload: JwtPayload): Promise<RequestUser> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      include: {
        cybers: {
          include: {
            cyber: { select: { id: true, nom: true } },
          },
        },
      },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Utilisateur introuvable ou désactivé');
    }

    const cybers = user.cybers.map((uc) => ({
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
}
