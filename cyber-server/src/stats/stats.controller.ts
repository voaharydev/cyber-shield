import { Controller, Get, Query } from '@nestjs/common';
import { Role } from '@cyber-shield/db';
import { Roles } from '../auth/decorators/roles.decorator';
import { StatsService } from './stats.service';
import { SalesStatsQueryDto } from './dto/sales-stats-query.dto';

@Controller('stats')
@Roles(Role.ADMIN)
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('sales')
  getSales(@Query() dto: SalesStatsQueryDto) {
    return this.statsService.getSalesStats(dto);
  }
}
