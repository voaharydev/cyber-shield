import { IsNotEmpty, IsString } from 'class-validator';

export class LookupClientDto {
  @IsString()
  @IsNotEmpty()
  telephone!: string;
}
