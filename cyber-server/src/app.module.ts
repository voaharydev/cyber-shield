import { Module } from '@nestjs/common';
import { AuthModule, authGlobalProviders } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TicketModule } from './ticket/ticket.module';
import { PcModule } from './pc/pc.module';
import { ConfigModule } from './config/config.module';
import { CyberModule } from './cyber/cyber.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    TicketModule,
    PcModule,
    ConfigModule,
    CyberModule,
  ],
  providers: [...authGlobalProviders],
})
export class AppModule {}
