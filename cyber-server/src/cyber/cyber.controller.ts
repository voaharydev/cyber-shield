import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Role } from '@cyber-shield/db';
import { Roles } from '../auth/decorators/roles.decorator';
import { CyberService } from './cyber.service';
import { CreateCyberDto } from './dto/create-cyber.dto';
import { DuplicateCyberDto } from './dto/duplicate-cyber.dto';
import { ListCybersQueryDto } from './dto/list-cybers-query.dto';
import { UpdateCyberDto } from './dto/update-cyber.dto';

@Controller('cybers')
@Roles(Role.ADMIN)
export class CyberController {
  constructor(private readonly cyberService: CyberService) {}

  @Get()
  findAll(@Query() query: ListCybersQueryDto) {
    return this.cyberService.findAll({
      includeInactive: query.includeInactive,
      includeArchived: query.includeArchived,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cyberService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCyberDto) {
    return this.cyberService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCyberDto) {
    return this.cyberService.update(id, dto);
  }

  @Post(':id/deactivate')
  deactivate(@Param('id') id: string) {
    return this.cyberService.deactivate(id);
  }

  @Post(':id/archive')
  archive(@Param('id') id: string) {
    return this.cyberService.archive(id);
  }

  @Post(':id/reactivate')
  reactivate(@Param('id') id: string) {
    return this.cyberService.reactivate(id);
  }

  @Post(':id/duplicate')
  duplicate(@Param('id') id: string, @Body() dto: DuplicateCyberDto) {
    return this.cyberService.duplicate(id, dto);
  }
}
