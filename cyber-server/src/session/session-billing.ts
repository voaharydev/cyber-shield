import { Prisma } from '@prisma/client';

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
  return (
    Math.round(baseTarifHoraire * (elapsedMinutes / 60) * 100) / 100
  );
}

export function computeLivePostpaid(session: {
  tempsDebut: Date;
  baseTarifHoraire: Prisma.Decimal | number;
}): { tempsEcouleMinutes: number; montantEstime: number } {
  const hourly =
    typeof session.baseTarifHoraire === 'number'
      ? session.baseTarifHoraire
      : session.baseTarifHoraire.toNumber();
  const tempsEcouleMinutes = computeElapsedMinutes(session.tempsDebut, new Date());
  return {
    tempsEcouleMinutes,
    montantEstime: computeMontantFromMinutes(hourly, tempsEcouleMinutes),
  };
}

export function toHourlyRate(prixParMinute: Prisma.Decimal | number): number {
  const perMinute =
    typeof prixParMinute === 'number'
      ? prixParMinute
      : prixParMinute.toNumber();
  return perMinute * 60;
}
