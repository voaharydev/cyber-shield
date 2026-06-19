const FIDELITE_CONFIG_ID = 'default';

export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');

  if (digits.length === 0) {
    throw new Error('Numéro de téléphone invalide');
  }

  if (digits.startsWith('261') && digits.length >= 11) {
    return digits;
  }

  if (digits.startsWith('0') && digits.length >= 9) {
    return `261${digits.slice(1)}`;
  }

  if (digits.length >= 9) {
    return `261${digits}`;
  }

  throw new Error('Numéro de téléphone invalide');
}

export function formatPhoneDisplay(telephone: string): string {
  if (telephone.startsWith('261') && telephone.length >= 11) {
    const local = `0${telephone.slice(3)}`;
    return local.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
  }
  return telephone;
}

export { FIDELITE_CONFIG_ID };
