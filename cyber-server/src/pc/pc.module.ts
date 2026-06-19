import { Module, forwardRef } from '@nestjs/common';
import { PcGateway } from './pc.gateway';
import { PcService } from './pc.service';
import { SessionModule } from '../session/session.module';

@Module({
  imports: [forwardRef(() => SessionModule)],
  providers: [PcGateway, PcService],
  exports: [PcService],
})
export class PcModule {}
