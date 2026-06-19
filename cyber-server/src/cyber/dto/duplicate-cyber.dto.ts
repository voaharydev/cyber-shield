import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class DuplicateCyberDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(80)
  nom?: string;
}
