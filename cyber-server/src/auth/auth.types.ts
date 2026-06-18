import { Role } from '@prisma/client';

export interface JwtPayload {
  sub: string;
  username: string;
  role: Role;
  cyberId: string | null;
}

export interface RequestUser {
  id: string;
  username: string;
  role: Role;
  cyberId: string | null;
}
