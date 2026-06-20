import { Module, forwardRef } from '@nestjs/common';
import { PcModule } from '../pc/pc.module';
import { PrismaModule } from '../prisma/prisma.module';
import { SupabaseSyncService } from './supabase-sync.service';

@Module({
  imports: [PrismaModule, forwardRef(() => PcModule)],
  providers: [SupabaseSyncService],
  exports: [SupabaseSyncService],
})
export class SupabaseModule {}
