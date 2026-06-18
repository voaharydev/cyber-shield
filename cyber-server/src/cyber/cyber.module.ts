import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { CyberController } from './cyber.controller';
import { CyberService } from './cyber.service';

@Module({
  imports: [ConfigModule],
  controllers: [CyberController],
  providers: [CyberService],
  exports: [CyberService],
})
export class CyberModule {}
