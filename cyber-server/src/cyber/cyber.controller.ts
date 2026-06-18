import { Body, Controller, Get, Post } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { CyberService } from './cyber.service';
import { CreateCyberDto } from './dto/create-cyber.dto';

@Controller('cybers')
@Roles(Role.ADMIN)
export class CyberController {
  constructor(private readonly cyberService: CyberService) {}

  @Get()
  findAll() {
    return this.cyberService.findAll();
  }

  @Post()
  create(@Body() dto: CreateCyberDto) {
    return this.cyberService.create(dto);
  }
}
