import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';

export enum EchangePointsType {
  MINUTES = 'MINUTES',
  REDUCTION = 'REDUCTION',
}

export class EchangePointsDto {
  @IsEnum(EchangePointsType)
  type!: EchangePointsType;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  points!: number;
}

export class ListMouvementsDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  offset?: number = 0;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  limit?: number = 50;
}
