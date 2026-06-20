import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Role } from '@cyber-shield/db';
import { RequireCyber } from '../auth/decorators/require-cyber.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { FideliteService } from './fidelite.service';
import { UpdateFideliteConfigDto } from './dto/update-fidelite-config.dto';
import { LookupClientDto } from './dto/lookup-client.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { ListMouvementsDto } from './dto/echange-points.dto';

@Controller('fidelite')
export class FideliteController {
  constructor(private readonly fideliteService: FideliteService) {}

  @Get('config')
  @Roles(Role.ADMIN)
  getConfig() {
    return this.fideliteService.getConfig();
  }

  @Patch('config')
  @Roles(Role.ADMIN)
  updateConfig(@Body() dto: UpdateFideliteConfigDto) {
    return this.fideliteService.updateConfig(dto);
  }

  @Get('clients/lookup')
  @RequireCyber()
  lookupClient(@Query() dto: LookupClientDto) {
    return this.fideliteService.lookupByTelephone(dto.telephone);
  }

  @Post('clients')
  @RequireCyber()
  createClient(@Body() dto: CreateClientDto) {
    return this.fideliteService.createClient(dto);
  }

  @Get('clients/:id/mouvements')
  @RequireCyber()
  listMouvements(@Param('id') id: string, @Query() dto: ListMouvementsDto) {
    return this.fideliteService.listMouvements(id, dto);
  }
}
