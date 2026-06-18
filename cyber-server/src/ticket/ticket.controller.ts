import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RequireCyber } from '../auth/decorators/require-cyber.decorator';
import { ActiveCyberId } from '../auth/decorators/active-cyber-id.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { RequestUser } from '../auth/auth.types';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { ListTicketsDto } from './dto/list-tickets.dto';

@Controller('tickets')
@RequireCyber()
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  findAll(@ActiveCyberId() cyberId: string, @Query() dto: ListTicketsDto) {
    return this.ticketService.findAll(cyberId, dto);
  }

  @Get(':code')
  findByCode(@ActiveCyberId() cyberId: string, @Param('code') code: string) {
    return this.ticketService.findByCode(cyberId, code);
  }

  @Post()
  create(
    @ActiveCyberId() cyberId: string,
    @CurrentUser() user: RequestUser,
    @Body() dto: CreateTicketDto,
  ) {
    return this.ticketService.createTicket(cyberId, user.id, dto);
  }
}
