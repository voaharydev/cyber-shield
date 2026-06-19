import { Module, forwardRef } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { PcModule } from '../pc/pc.module';

@Module({
  imports: [forwardRef(() => PcModule)],
  controllers: [SessionController],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
