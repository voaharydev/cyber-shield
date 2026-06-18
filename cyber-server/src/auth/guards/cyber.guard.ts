import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { RequestUser } from '../auth.types';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { REQUIRE_CYBER_KEY } from '../decorators/require-cyber.decorator';

@Injectable()
export class CyberGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const requireCyber = this.reflector.getAllAndOverride<boolean>(
      REQUIRE_CYBER_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requireCyber) {
      return true;
    }

    const request = context.switchToHttp().getRequest<{
      user: RequestUser;
      headers: Record<string, string | undefined>;
      cyberId?: string;
    }>();

    const user = request.user;
    const headerCyber = request.headers['x-cyber-id'];
    let cyberId: string;

    if (user.role === Role.STAFF) {
      if (user.cyberIds.length === 0) {
        throw new ForbiddenException('Employé sans cyber assigné');
      }
      if (!headerCyber) {
        throw new BadRequestException(
          'Header X-Cyber-Id requis pour les opérations sur un établissement',
        );
      }
      if (!user.cyberIds.includes(headerCyber)) {
        throw new ForbiddenException('Accès refusé à ce cyber');
      }
      cyberId = headerCyber;
    } else if (user.role === Role.ADMIN) {
      if (!headerCyber) {
        throw new BadRequestException(
          'Header X-Cyber-Id requis pour les opérations sur un établissement',
        );
      }
      cyberId = headerCyber;
    } else {
      throw new ForbiddenException('Rôle non autorisé');
    }

    const cyber = await this.prisma.cyber.findUnique({
      where: { id: cyberId },
    });
    if (!cyber) {
      throw new BadRequestException('Cyber introuvable');
    }

    request.cyberId = cyberId;
    return true;
  }
}
