import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ActiveCyberId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest<{ cyberId: string }>();
    return request.cyberId;
  },
);
