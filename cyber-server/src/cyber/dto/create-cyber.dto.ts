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

export class CreateCyberDto {
  @IsString()
  @MinLength(1)
  @MaxLength(80)
  nom!: string;

  @IsInt()
  @Min(1)
  @Max(64)
  nombrePostes!: number;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @IsInt({ each: true })
  @Min(5, { each: true })
  @Max(480, { each: true })
  dureesTicket!: number[];

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  prixParMinute!: number;
}
