'use client';

import { AppHeader } from '@/components/AppHeader';
import { TicketList } from '@/components/TicketList';

export default function TicketsPage() {
  return (
    <div className="min-h-screen">
      <AppHeader
        title="Tickets émis"
        subtitle="Consultation et suivi des tickets vendus"
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <TicketList />
      </main>
    </div>
  );
}
