import { Module } from '@nestjs/common';
import { AuthModule, authGlobalProviders } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TicketModule } from './ticket/ticket.module';
import { PcModule } from './pc/pc.module';
import { ConfigModule } from './config/config.module';
import { CyberModule } from './cyber/cyber.module';
import { UsersModule } from './users/users.module';
import { StatsModule } from './stats/stats.module';
import { FideliteModule } from './fidelite/fidelite.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    TicketModule,
    PcModule,
    ConfigModule,
    CyberModule,
    UsersModule,
    StatsModule,
    FideliteModule,
    SessionModule,
  ],
  providers: [...authGlobalProviders],
})
export class AppModule {}
