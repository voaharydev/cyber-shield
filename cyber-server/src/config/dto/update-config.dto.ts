import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateConfigDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(64)
  nombrePostes?: number;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @IsInt({ each: true })
  @Min(5, { each: true })
  @Max(480, { each: true })
  dureesTicket?: number[];

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(80)
  nom?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  prixParMinute?: number;
}
