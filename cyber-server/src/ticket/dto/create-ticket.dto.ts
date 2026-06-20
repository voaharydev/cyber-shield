import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { TypePaiement } from '@cyber-shield/db';
import {
  EchangePointsDto,
  EchangePointsType,
} from '../../fidelite/dto/echange-points.dto';

export { EchangePointsType };

export class CreateTicketDto {
  @IsInt()
  @Min(1)
  tempsInitial!: number;

  @IsEnum(TypePaiement)
  typePaiement!: TypePaiement;

  @IsOptional()
  @IsString()
  telephone?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => EchangePointsDto)
  echangePoints?: EchangePointsDto;
}
