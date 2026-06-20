import { IsEnum } from 'class-validator';
import { TypePaiement } from '@cyber-shield/db';

export class EncaisserSessionDto {
  @IsEnum(TypePaiement)
  typePaiement!: TypePaiement;
}
