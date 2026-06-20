import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { SupabaseSyncService } from '../supabase/supabase-sync.service';

@Controller('health')
export class HealthController {
  constructor(private readonly supabaseSync: SupabaseSyncService) {}

  @Public()
  @Get()
  getHealth() {
    const sync = this.supabaseSync.getStatus();
    return {
      status: 'ok',
      edgeCyberId: sync.edgeCyberId,
      supabaseSync: sync.active,
    };
  }
}
