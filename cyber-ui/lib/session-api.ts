import { apiFetch, TypePaiement } from '@/lib/api';

export async function startPostpaidSession(
  poste: number,
): Promise<{ success: boolean }> {
  return apiFetch(`/sessions/postpayee/${poste}/start`, { method: 'POST' });
}

export async function stopPostpaidSession(
  poste: number,
): Promise<{ success: boolean; montantDu?: number }> {
  return apiFetch(`/sessions/postpayee/${poste}/stop`, { method: 'POST' });
}

export async function encaisserPostpaidSession(
  poste: number,
  typePaiement: TypePaiement,
): Promise<{ success: boolean; montantEncaisse?: number }> {
  return apiFetch(`/sessions/postpayee/${poste}/encaisser`, {
    method: 'POST',
    body: JSON.stringify({ typePaiement }),
  });
}
