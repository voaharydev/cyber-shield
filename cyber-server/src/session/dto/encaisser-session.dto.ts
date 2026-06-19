import { IsEnum } from 'class-validator';
import { TypePaiement } from '@prisma/client';

export class EncaisserSessionDto {
  @IsEnum(TypePaiement)
  typePaiement!: TypePaiement;
}
