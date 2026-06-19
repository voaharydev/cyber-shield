export type TypePaiement = 'ESPECES' | 'MOBILE_MONEY' | 'CARTE';
export type StatutTicket = 'VALIDE' | 'ACTIVE' | 'EXPIRE';
export type UserRole = 'ADMIN' | 'STAFF';

export interface AuthUser {
  id: string;
  username: string;
  role: UserRole;
  isActive: boolean;
  cyberIds: string[];
  cybers: { id: string; nom: string }[];
}

export interface LoginResponse {
  accessToken: string;
  user: AuthUser;
}

export interface CreateTicketRequest {
  tempsInitial: number;
  typePaiement: TypePaiement;
  telephone?: string;
  echangePoints?: {
    type: 'MINUTES' | 'REDUCTION';
    points: number;
  };
}

export interface TicketResponse {
  ticket: {
    id: string;
    codeUnique: string;
    tempsInitial: number;
    tempsRestant: number;
    statut: string;
    minutesBonus?: number;
    reductionAr?: number;
    pointsGagnes?: number;
    pointsUtilises?: number;
    montantEncaisse?: number;
  };
}

export interface TicketDetail {
  id: string;
  codeUnique: string;
  statut: StatutTicket;
  statutLabel: string;
  tempsInitial: number;
  tempsRestant: number;
  createdAt: string;
  creePar: { username: string };
  numeroPoste: number | null;
}

export interface TicketsListResponse {
  tickets: TicketDetail[];
  total: number;
  limit: number;
  offset: number;
}

export interface FetchTicketsParams {
  statut?: StatutTicket;
  q?: string;
  limit?: number;
  offset?: number;
}

export interface AppConfig {
  id: string;
  nom: string;
  nombrePostes: number;
  dureesTicket: number[];
  prixParMinute: number;
}

export interface UpdateConfigRequest {
  nombrePostes?: number;
  dureesTicket?: number[];
  nom?: string;
  prixParMinute?: number;
}

export interface CyberSummary {
  id: string;
  nom: string;
  nombrePostes: number;
  prixParMinute: number;
  createdAt: string;
}

export interface CreateCyberRequest {
  nom: string;
  nombrePostes: number;
  dureesTicket: number[];
  prixParMinute: number;
}

export interface StaffUser {
  id: string;
  username: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  cyberIds: string[];
  cybers: { id: string; nom: string }[];
}

export interface CreateStaffRequest {
  username: string;
  password: string;
  cyberIds: string[];
}

export interface UpdateStaffRequest {
  cyberIds?: string[];
  password?: string;
  isActive?: boolean;
}

export type SalesGroupBy = 'day' | 'week' | 'month';

export interface SalesStatsBucket {
  label: string;
  ticketCount: number;
  revenue: number;
}

export interface SalesStatsByCyber {
  cyberId: string;
  nom: string;
  ticketCount: number;
  revenue: number;
  averages: { ticketCount: number; revenue: number };
  previousYear: { ticketCount: number; revenue: number };
}

export interface SalesStatsResponse {
  groupBy: SalesGroupBy;
  from: string;
  to: string;
  cyberId: string | null;
  cyberIds: string[] | null;
  totals: { ticketCount: number; revenue: number };
  averages: { ticketCount: number; revenue: number; bucketCount: number };
  buckets: SalesStatsBucket[];
  previousYear: {
    from: string;
    to: string;
    totals: { ticketCount: number; revenue: number };
    averages: { ticketCount: number; revenue: number; bucketCount: number };
    buckets: SalesStatsBucket[];
  };
  byCyber?: SalesStatsByCyber[];
}

export interface FetchSalesStatsParams {
  groupBy?: SalesGroupBy;
  from?: string;
  to?: string;
  cyberId?: string;
  cyberIds?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5001';

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message =
      (errorBody as { message?: string | string[] }).message ??
      `Erreur HTTP ${response.status}`;
    throw new Error(
      Array.isArray(message) ? message.join(', ') : String(message),
    );
  }
  return response.json() as Promise<T>;
}

interface ApiFetchOptions extends RequestInit {
  token?: string | null;
  cyberId?: string | null;
  skipCyberHeader?: boolean;
}

export async function apiFetch<T>(
  path: string,
  options: ApiFetchOptions = {},
): Promise<T> {
  const {
    token = typeof window !== 'undefined'
      ? sessionStorage.getItem('cyber_access_token')
      : null,
    cyberId = typeof window !== 'undefined'
      ? localStorage.getItem('cyber_active_id')
      : null,
    skipCyberHeader = false,
    headers,
    ...rest
  } = options;

  const mergedHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };

  if (token) {
    mergedHeaders.Authorization = `Bearer ${token}`;
  }
  if (!skipCyberHeader && cyberId) {
    mergedHeaders['X-Cyber-Id'] = cyberId;
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: mergedHeaders,
  });

  return handleResponse<T>(response);
}

export async function login(
  username: string,
  password: string,
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return handleResponse<LoginResponse>(response);
}

export async function fetchMe(token: string): Promise<{ user: AuthUser }> {
  return apiFetch<{ user: AuthUser }>('/auth/me', {
    token,
    skipCyberHeader: true,
  });
}

export async function fetchCybers(
  token?: string | null,
): Promise<{ cybers: CyberSummary[] }> {
  return apiFetch<{ cybers: CyberSummary[] }>('/cybers', {
    token,
    skipCyberHeader: true,
  });
}

export async function createCyber(
  dto: CreateCyberRequest,
): Promise<CyberSummary> {
  return apiFetch<CyberSummary>('/cybers', {
    method: 'POST',
    body: JSON.stringify(dto),
    skipCyberHeader: true,
  });
}

export async function createTicket(
  dto: CreateTicketRequest,
): Promise<TicketResponse> {
  return apiFetch<TicketResponse>('/tickets', {
    method: 'POST',
    body: JSON.stringify(dto),
  });
}

export async function fetchTickets(
  params: FetchTicketsParams = {},
): Promise<TicketsListResponse> {
  const search = new URLSearchParams();
  if (params.statut) search.set('statut', params.statut);
  if (params.q) search.set('q', params.q);
  if (params.limit != null) search.set('limit', String(params.limit));
  if (params.offset != null) search.set('offset', String(params.offset));

  const query = search.toString();
  const path = query ? `/tickets?${query}` : '/tickets';
  return apiFetch<TicketsListResponse>(path);
}

export async function fetchTicketByCode(
  code: string,
): Promise<{ ticket: TicketDetail }> {
  return apiFetch<{ ticket: TicketDetail }>(
    `/tickets/${encodeURIComponent(code.toUpperCase())}`,
  );
}

export async function fetchConfig(): Promise<AppConfig> {
  return apiFetch<AppConfig>('/config');
}

export async function updateConfig(
  dto: UpdateConfigRequest,
): Promise<AppConfig> {
  return apiFetch<AppConfig>('/config', {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });
}

export async function fetchStaff(
  includeInactive = false,
): Promise<{ staff: StaffUser[] }> {
  const query = includeInactive ? '?includeInactive=true' : '';
  return apiFetch<{ staff: StaffUser[] }>(`/users${query}`, {
    skipCyberHeader: true,
  });
}

export async function createStaff(
  dto: CreateStaffRequest,
): Promise<{ staff: StaffUser }> {
  return apiFetch<{ staff: StaffUser }>('/users', {
    method: 'POST',
    body: JSON.stringify(dto),
    skipCyberHeader: true,
  });
}

export async function updateStaff(
  id: string,
  dto: UpdateStaffRequest,
): Promise<{ staff: StaffUser }> {
  return apiFetch<{ staff: StaffUser }>(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
    skipCyberHeader: true,
  });
}

export async function deactivateStaff(
  id: string,
): Promise<{ staff: StaffUser }> {
  return apiFetch<{ staff: StaffUser }>(`/users/${id}`, {
    method: 'DELETE',
    skipCyberHeader: true,
  });
}

export async function fetchSalesStats(
  params: FetchSalesStatsParams = {},
): Promise<SalesStatsResponse> {
  const search = new URLSearchParams();
  if (params.groupBy) search.set('groupBy', params.groupBy);
  if (params.from) search.set('from', params.from);
  if (params.to) search.set('to', params.to);
  if (params.cyberId) search.set('cyberId', params.cyberId);
  if (params.cyberIds) search.set('cyberIds', params.cyberIds);

  const query = search.toString();
  const path = query ? `/stats/sales?${query}` : '/stats/sales';
  return apiFetch<SalesStatsResponse>(path, { skipCyberHeader: true });
}
