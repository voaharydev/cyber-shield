export type PosteColor = 'green' | 'blue' | 'orange' | 'yellow' | 'red';

export interface PosteState {
  numeroPoste: number;
  statut: 'VERROUILLE' | 'EN_COURS' | 'A_PAYER';
  connected: boolean;
  typeSession: 'PREPAID' | 'POSTPAID' | null;
  tempsRestant: number | null;
  tempsEcouleMinutes: number | null;
  montantEstime: number | null;
  montantDu: number | null;
  ticketCode: string | null;
}

export function getPosteColor(poste: PosteState): PosteColor {
  if (poste.statut === 'A_PAYER') {
    return 'orange';
  }
  if (poste.statut === 'EN_COURS' && poste.typeSession === 'POSTPAID') {
    return 'blue';
  }
  if (poste.statut === 'EN_COURS') {
    return 'green';
  }
  if (poste.connected) {
    return 'yellow';
  }
  return 'red';
}
