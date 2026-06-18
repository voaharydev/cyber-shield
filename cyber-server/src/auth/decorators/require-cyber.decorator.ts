import { SetMetadata } from '@nestjs/common';

export const REQUIRE_CYBER_KEY = 'requireCyber';
export const RequireCyber = () => SetMetadata(REQUIRE_CYBER_KEY, true);
