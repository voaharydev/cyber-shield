import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@cyber-shield/domain'],
  serverExternalPackages: ['@prisma/client', 'prisma', '@cyber-shield/db'],
};

export default nextConfig;
