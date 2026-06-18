import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [ConfigModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
