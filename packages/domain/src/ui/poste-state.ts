export function computeElapsedMinutes(
  tempsDebut: Date,
  tempsFin: Date,
): number {
  const ms = Math.max(0, tempsFin.getTime() - tempsDebut.getTime());
  return Math.max(1, Math.ceil(ms / 60_000));
}

export function computeMontantFromMinutes(
  baseTarifHoraire: number,
  elapsedMinutes: number,
): number {
  return Math.round(baseTarifHoraire * (elapsedMinutes / 60) * 100) / 100;
}

export function computeLivePostpaid(session: {
  tempsDebut: Date;
  baseTarifHoraire: number;
}): { tempsEcouleMinutes: number; montantEstime: number } {
  const tempsEcouleMinutes = computeElapsedMinutes(
    session.tempsDebut,
    new Date(),
  );
  return {
    tempsEcouleMinutes,
    montantEstime: computeMontantFromMinutes(
      session.baseTarifHoraire,
      tempsEcouleMinutes,
    ),
  };
}

export function buildPosteStateFromRows(
  session: {
    numeroPoste: number;
    statut: string;
    typeSession: string | null;
    tempsDebut: Date | null;
    baseTarifHoraire: number;
    montantDu: number | null;
    ticketActuel?: { tempsRestant: number; codeUnique: string } | null;
  },
  presence: { connected: boolean } | null,
) {
  let tempsEcouleMinutes: number | null = null;
  let montantEstime: number | null = null;
  const montantDu = session.montantDu;

  if (
    session.statut === 'EN_COURS' &&
    session.typeSession === 'POSTPAID' &&
    session.tempsDebut
  ) {
    const live = computeLivePostpaid({
      tempsDebut: session.tempsDebut,
      baseTarifHoraire: session.baseTarifHoraire,
    });
    tempsEcouleMinutes = live.tempsEcouleMinutes;
    montantEstime = live.montantEstime;
  }

  return {
    numeroPoste: session.numeroPoste,
    statut: session.statut as 'VERROUILLE' | 'EN_COURS' | 'A_PAYER',
    connected: presence?.connected ?? false,
    typeSession: session.typeSession as 'PREPAID' | 'POSTPAID' | null,
    tempsRestant:
      session.typeSession !== 'POSTPAID'
        ? (session.ticketActuel?.tempsRestant ?? null)
        : null,
    tempsEcouleMinutes,
    montantEstime,
    montantDu,
    ticketCode: session.ticketActuel?.codeUnique ?? null,
  };
}
