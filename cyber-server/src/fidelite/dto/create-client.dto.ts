import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  telephone!: string;

  @IsOptional()
  @IsString()
  nom?: string;
}
