import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { FideliteModule } from '../fidelite/fidelite.module';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [ConfigModule, FideliteModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
