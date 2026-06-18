import { IsEnum, IsInt, Min } from 'class-validator';
import { TypePaiement } from '@prisma/client';

export class CreateTicketDto {
  @IsInt()
  @Min(1)
  tempsInitial!: number;

  @IsEnum(TypePaiement)
  typePaiement!: TypePaiement;
}
