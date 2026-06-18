import { Module } from '@nestjs/common';
import { PcGateway } from './pc.gateway';
import { PcService } from './pc.service';

@Module({
  providers: [PcGateway, PcService],
  exports: [PcService],
})
export class PcModule {}

