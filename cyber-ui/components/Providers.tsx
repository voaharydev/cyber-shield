'use client';

import { AuthProvider } from '@/lib/auth';
import { CyberProvider } from '@/lib/cyber-context';
import { AuthGuard } from '@/components/AuthGuard';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CyberProvider>
        <AuthGuard>{children}</AuthGuard>
      </CyberProvider>
    </AuthProvider>
  );
}
