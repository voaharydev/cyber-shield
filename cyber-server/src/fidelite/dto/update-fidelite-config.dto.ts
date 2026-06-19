import { Type } from 'class-transformer';
import { IsBoolean, IsInt, Min } from 'class-validator';

export class UpdateFideliteConfigDto {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  pointsParMinuteAchat!: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  pointsPourMinuteGratuite!: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  pointsPour100Ar!: number;

  @IsBoolean()
  actif!: boolean;
}
