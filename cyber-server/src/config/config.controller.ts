import { Body, Controller, Get, Patch } from '@nestjs/common';
import { RequireCyber } from '../auth/decorators/require-cyber.decorator';
import { ActiveCyberId } from '../auth/decorators/active-cyber-id.decorator';
import { ConfigService } from './config.service';
import { UpdateConfigDto } from './dto/update-config.dto';

@Controller('config')
@RequireCyber()
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfig(@ActiveCyberId() cyberId: string) {
    return this.configService.getByCyberId(cyberId);
  }

  @Patch()
  updateConfig(
    @ActiveCyberId() cyberId: string,
    @Body() dto: UpdateConfigDto,
  ) {
    return this.configService.update(cyberId, dto);
  }
}
