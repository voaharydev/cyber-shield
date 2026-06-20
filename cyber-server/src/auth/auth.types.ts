import { Role } from '@cyber-shield/db';

export interface JwtPayload {
  sub: string;
  username: string;
  role: Role;
}

export interface CyberSummary {
  id: string;
  nom: string;
}

export interface RequestUser {
  id: string;
  username: string;
  role: Role;
  isActive: boolean;
  cyberIds: string[];
  cybers: CyberSummary[];
}
