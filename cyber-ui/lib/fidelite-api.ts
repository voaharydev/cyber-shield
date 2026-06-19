import { apiFetch } from '@/lib/api';

export interface FideliteConfig {
  pointsParMinuteAchat: number;
  pointsPourMinuteGratuite: number;
  pointsPour100Ar: number;
  actif: boolean;
}

export interface FideliteClient {
  id: string;
  telephone: string;
  telephoneDisplay: string;
  nom: string | null;
  soldePoints: number;
  isActive: boolean;
}

export interface FideliteLookupResponse {
  client: FideliteClient | null;
  config: FideliteConfig;
}

export interface UpdateFideliteConfigRequest {
  pointsParMinuteAchat: number;
  pointsPourMinuteGratuite: number;
  pointsPour100Ar: number;
  actif: boolean;
}

export async function fetchFideliteConfig(): Promise<FideliteConfig> {
  return apiFetch<FideliteConfig>('/fidelite/config', { skipCyberHeader: true });
}

export async function updateFideliteConfig(
  dto: UpdateFideliteConfigRequest,
): Promise<FideliteConfig> {
  return apiFetch<FideliteConfig>('/fidelite/config', {
    method: 'PATCH',
    body: JSON.stringify(dto),
    skipCyberHeader: true,
  });
}

export async function lookupFideliteClient(
  telephone: string,
): Promise<FideliteLookupResponse> {
  const query = new URLSearchParams({ telephone }).toString();
  return apiFetch<FideliteLookupResponse>(`/fidelite/clients/lookup?${query}`);
}

export async function createFideliteClient(
  telephone: string,
  nom?: string,
): Promise<FideliteClient> {
  return apiFetch<FideliteClient>('/fidelite/clients', {
    method: 'POST',
    body: JSON.stringify({ telephone, nom }),
  });
}
