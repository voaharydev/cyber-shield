import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { RequireCyber } from '../auth/decorators/require-cyber.decorator';
import { ActiveCyberId } from '../auth/decorators/active-cyber-id.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { RequestUser } from '../auth/auth.types';
import { SessionService } from './session.service';
import { EncaisserSessionDto } from './dto/encaisser-session.dto';

@Controller('sessions')
@RequireCyber()
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('postpayee/:poste/start')
  startPostpaid(
    @ActiveCyberId() cyberId: string,
    @Param('poste', ParseIntPipe) poste: number,
  ) {
    return this.sessionService.demarrerSessionPostPayee(cyberId, poste);
  }

  @Post('postpayee/:poste/stop')
  stopPostpaid(
    @ActiveCyberId() cyberId: string,
    @Param('poste', ParseIntPipe) poste: number,
  ) {
    return this.sessionService.arreterSessionPostPayee(cyberId, poste);
  }

  @Post('postpayee/:poste/encaisser')
  encaisserPostpaid(
    @ActiveCyberId() cyberId: string,
    @Param('poste', ParseIntPipe) poste: number,
    @CurrentUser() user: RequestUser,
    @Body() dto: EncaisserSessionDto,
  ) {
    return this.sessionService.encaisserSessionPostPayee(
      cyberId,
      poste,
      user.id,
      dto.typePaiement,
    );
  }

  @Post(':poste/reset')
  resetPoste(
    @ActiveCyberId() cyberId: string,
    @Param('poste', ParseIntPipe) poste: number,
  ) {
    return this.sessionService.reinitialiserPoste(cyberId, poste);
  }
}
