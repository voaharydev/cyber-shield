import { Type } from 'class-transformer';
import { IsEnum, IsISO8601, IsOptional, IsString } from 'class-validator';

export enum SalesGroupBy {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export class SalesStatsQueryDto {
  @IsOptional()
  @IsEnum(SalesGroupBy)
  groupBy?: SalesGroupBy = SalesGroupBy.DAY;

  @IsOptional()
  @IsISO8601()
  from?: string;

  @IsOptional()
  @IsISO8601()
  to?: string;

  @IsOptional()
  @IsString()
  cyberId?: string;
}
