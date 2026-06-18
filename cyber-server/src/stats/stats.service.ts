import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { SalesGroupBy, SalesStatsQueryDto } from './dto/sales-stats-query.dto';

export interface SalesBucketDto {
  label: string;
  ticketCount: number;
  revenue: number;
}

export interface SalesByCyberDto {
  cyberId: string;
  nom: string;
  ticketCount: number;
  revenue: number;
}

export interface SalesStatsResponse {
  groupBy: SalesGroupBy;
  from: string;
  to: string;
  cyberId: string | null;
  totals: { ticketCount: number; revenue: number };
  averages: { ticketCount: number; revenue: number; bucketCount: number };
  buckets: SalesBucketDto[];
  previousYear: {
    from: string;
    to: string;
    totals: { ticketCount: number; revenue: number };
    averages: { ticketCount: number; revenue: number; bucketCount: number };
    buckets: SalesBucketDto[];
  };
  byCyber?: SalesByCyberDto[];
}

type BucketRow = { bucket: Date; value: bigint | number | Prisma.Decimal };

@Injectable()
export class StatsService {
  constructor(private readonly prisma: PrismaService) {}

  private pgTrunc(unit: SalesGroupBy): string {
    switch (unit) {
      case SalesGroupBy.WEEK:
        return 'week';
      case SalesGroupBy.MONTH:
        return 'month';
      default:
        return 'day';
    }
  }

  private defaultFrom(groupBy: SalesGroupBy, to: Date): Date {
    const from = new Date(to);
    switch (groupBy) {
      case SalesGroupBy.WEEK:
        from.setUTCDate(from.getUTCDate() - 12 * 7);
        break;
      case SalesGroupBy.MONTH:
        from.setUTCMonth(from.getUTCMonth() - 12);
        break;
      default:
        from.setUTCDate(from.getUTCDate() - 30);
    }
    from.setUTCHours(0, 0, 0, 0);
    return from;
  }

  private formatLabel(date: Date, groupBy: SalesGroupBy): string {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    if (groupBy === SalesGroupBy.MONTH) {
      return `${y}-${m}`;
    }
    if (groupBy === SalesGroupBy.WEEK) {
      const jan1 = new Date(Date.UTC(y, 0, 1));
      const days = Math.floor(
        (date.getTime() - jan1.getTime()) / (24 * 60 * 60 * 1000),
      );
      const week = Math.ceil((days + jan1.getUTCDay() + 1) / 7);
      return `${y}-W${String(week).padStart(2, '0')}`;
    }
    return `${y}-${m}-${d}`;
  }

  private bucketKey(date: Date): string {
    return date.toISOString();
  }

  private shiftYear(date: Date, years: number): Date {
    const shifted = new Date(date);
    shifted.setUTCFullYear(shifted.getUTCFullYear() + years);
    return shifted;
  }

  private countBucketsInRange(
    from: Date,
    to: Date,
    groupBy: SalesGroupBy,
  ): number {
    const start = new Date(from);
    start.setUTCHours(0, 0, 0, 0);
    const end = new Date(to);
    end.setUTCHours(0, 0, 0, 0);

    if (groupBy === SalesGroupBy.DAY) {
      return (
        Math.floor((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) + 1
      );
    }

    if (groupBy === SalesGroupBy.WEEK) {
      let count = 0;
      const cursor = new Date(start);
      while (cursor <= end) {
        count++;
        cursor.setUTCDate(cursor.getUTCDate() + 7);
      }
      return Math.max(count, 1);
    }

    let count = 0;
    const cursor = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), 1));
    const endMonth = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), 1));
    while (cursor <= endMonth) {
      count++;
      cursor.setUTCMonth(cursor.getUTCMonth() + 1);
    }
    return Math.max(count, 1);
  }

  private computeAverages(
    totals: { ticketCount: number; revenue: number },
    bucketCount: number,
  ): { ticketCount: number; revenue: number; bucketCount: number } {
    const divisor = Math.max(bucketCount, 1);
    return {
      ticketCount: Math.round((totals.ticketCount / divisor) * 100) / 100,
      revenue: Math.round((totals.revenue / divisor) * 100) / 100,
      bucketCount,
    };
  }

  private async buildStatsForRange(
    groupBy: SalesGroupBy,
    from: Date,
    to: Date,
    endExclusive: Date,
    cyberId?: string,
  ): Promise<{
    totals: { ticketCount: number; revenue: number };
    averages: { ticketCount: number; revenue: number; bucketCount: number };
    buckets: SalesBucketDto[];
  }> {
    const trunc = this.pgTrunc(groupBy);
    const [ticketMap, revenueMap] = await Promise.all([
      this.ticketBuckets(trunc, from, endExclusive, cyberId),
      this.revenueBuckets(trunc, from, endExclusive, cyberId),
    ]);

    const buckets = this.fillBucketGaps(
      this.mergeBuckets(ticketMap, revenueMap, groupBy),
      from,
      to,
      groupBy,
    );
    const totals = buckets.reduce(
      (acc, b) => ({
        ticketCount: acc.ticketCount + b.ticketCount,
        revenue: acc.revenue + b.revenue,
      }),
      { ticketCount: 0, revenue: 0 },
    );
    const bucketCount = this.countBucketsInRange(from, to, groupBy);
    const averages = this.computeAverages(totals, bucketCount);

    return { totals, averages, buckets };
  }

  private async ticketBuckets(
    trunc: string,
    from: Date,
    to: Date,
    cyberId?: string,
  ): Promise<Map<string, number>> {
    const rows = cyberId
      ? await this.prisma.$queryRaw<BucketRow[]>`
          SELECT date_trunc(${trunc}, "createdAt") AS bucket, COUNT(*)::int AS value
          FROM "Ticket"
          WHERE "cyberId" = ${cyberId}
            AND "createdAt" >= ${from}
            AND "createdAt" < ${to}
          GROUP BY 1
          ORDER BY 1`
      : await this.prisma.$queryRaw<BucketRow[]>`
          SELECT date_trunc(${trunc}, "createdAt") AS bucket, COUNT(*)::int AS value
          FROM "Ticket"
          WHERE "createdAt" >= ${from}
            AND "createdAt" < ${to}
          GROUP BY 1
          ORDER BY 1`;

    const map = new Map<string, number>();
    for (const row of rows) {
      map.set(this.bucketKey(new Date(row.bucket)), Number(row.value));
    }
    return map;
  }

  private async revenueBuckets(
    trunc: string,
    from: Date,
    to: Date,
    cyberId?: string,
  ): Promise<Map<string, number>> {
    const rows = cyberId
      ? await this.prisma.$queryRaw<BucketRow[]>`
          SELECT date_trunc(${trunc}, "dateTransaction") AS bucket,
                 COALESCE(SUM("montant"), 0)::numeric AS value
          FROM "TransactionCaisse"
          WHERE "cyberId" = ${cyberId}
            AND "dateTransaction" >= ${from}
            AND "dateTransaction" < ${to}
          GROUP BY 1
          ORDER BY 1`
      : await this.prisma.$queryRaw<BucketRow[]>`
          SELECT date_trunc(${trunc}, "dateTransaction") AS bucket,
                 COALESCE(SUM("montant"), 0)::numeric AS value
          FROM "TransactionCaisse"
          WHERE "dateTransaction" >= ${from}
            AND "dateTransaction" < ${to}
          GROUP BY 1
          ORDER BY 1`;

    const map = new Map<string, number>();
    for (const row of rows) {
      map.set(this.bucketKey(new Date(row.bucket)), Number(row.value));
    }
    return map;
  }

  private mergeBuckets(
    ticketMap: Map<string, number>,
    revenueMap: Map<string, number>,
    groupBy: SalesGroupBy,
  ): SalesBucketDto[] {
    const keys = new Set([...ticketMap.keys(), ...revenueMap.keys()]);
    const buckets: SalesBucketDto[] = [];

    for (const key of keys) {
      const date = new Date(key);
      buckets.push({
        label: this.formatLabel(date, groupBy),
        ticketCount: ticketMap.get(key) ?? 0,
        revenue: revenueMap.get(key) ?? 0,
      });
    }

    return buckets.sort((a, b) => a.label.localeCompare(b.label));
  }

  private fillBucketGaps(
    buckets: SalesBucketDto[],
    from: Date,
    to: Date,
    groupBy: SalesGroupBy,
  ): SalesBucketDto[] {
    const byLabel = new Map(buckets.map((b) => [b.label, b]));
    const filled: SalesBucketDto[] = [];
    const start = new Date(from);
    start.setUTCHours(0, 0, 0, 0);
    const end = new Date(to);
    end.setUTCHours(0, 0, 0, 0);

    if (groupBy === SalesGroupBy.DAY) {
      const cursor = new Date(start);
      while (cursor <= end) {
        const label = this.formatLabel(cursor, groupBy);
        filled.push(
          byLabel.get(label) ?? { label, ticketCount: 0, revenue: 0 },
        );
        cursor.setUTCDate(cursor.getUTCDate() + 1);
      }
      return filled;
    }

    if (groupBy === SalesGroupBy.WEEK) {
      const cursor = new Date(start);
      const day = cursor.getUTCDay();
      cursor.setUTCDate(cursor.getUTCDate() - day);
      while (cursor <= end) {
        const label = this.formatLabel(cursor, groupBy);
        if (!filled.some((b) => b.label === label)) {
          filled.push(
            byLabel.get(label) ?? { label, ticketCount: 0, revenue: 0 },
          );
        }
        cursor.setUTCDate(cursor.getUTCDate() + 7);
      }
      return filled;
    }

    const cursor = new Date(
      Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), 1),
    );
    const endMonth = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), 1));
    while (cursor <= endMonth) {
      const label = this.formatLabel(cursor, groupBy);
      filled.push(byLabel.get(label) ?? { label, ticketCount: 0, revenue: 0 });
      cursor.setUTCMonth(cursor.getUTCMonth() + 1);
    }
    return filled;
  }

  private async totalsByCyber(
    from: Date,
    to: Date,
  ): Promise<SalesByCyberDto[]> {
    const ticketRows = await this.prisma.$queryRaw<
      { cyberId: string; count: number }[]
    >`
      SELECT "cyberId", COUNT(*)::int AS count
      FROM "Ticket"
      WHERE "createdAt" >= ${from} AND "createdAt" < ${to}
      GROUP BY "cyberId"`;

    const revenueRows = await this.prisma.$queryRaw<
      { cyberId: string; revenue: Prisma.Decimal }[]
    >`
      SELECT "cyberId", COALESCE(SUM("montant"), 0)::numeric AS revenue
      FROM "TransactionCaisse"
      WHERE "dateTransaction" >= ${from} AND "dateTransaction" < ${to}
      GROUP BY "cyberId"`;

    const cybers = await this.prisma.cyber.findMany({
      select: { id: true, nom: true },
    });
    const nomById = new Map(cybers.map((c) => [c.id, c.nom]));

    const byCyber = new Map<string, SalesByCyberDto>();
    for (const row of ticketRows) {
      byCyber.set(row.cyberId, {
        cyberId: row.cyberId,
        nom: nomById.get(row.cyberId) ?? row.cyberId,
        ticketCount: row.count,
        revenue: 0,
      });
    }
    for (const row of revenueRows) {
      const existing = byCyber.get(row.cyberId);
      const revenue = Number(row.revenue);
      if (existing) {
        existing.revenue = revenue;
      } else {
        byCyber.set(row.cyberId, {
          cyberId: row.cyberId,
          nom: nomById.get(row.cyberId) ?? row.cyberId,
          ticketCount: 0,
          revenue,
        });
      }
    }

    return [...byCyber.values()].sort((a, b) => a.nom.localeCompare(b.nom));
  }

  async getSalesStats(dto: SalesStatsQueryDto): Promise<SalesStatsResponse> {
    const groupBy = dto.groupBy ?? SalesGroupBy.DAY;

    const to = dto.to ? new Date(dto.to) : new Date();
    to.setUTCHours(23, 59, 59, 999);

    const from = dto.from ? new Date(dto.from) : this.defaultFrom(groupBy, to);
    from.setUTCHours(0, 0, 0, 0);

    const endExclusive = new Date(to);
    endExclusive.setUTCDate(endExclusive.getUTCDate() + 1);
    endExclusive.setUTCHours(0, 0, 0, 0);

    const cyberId = dto.cyberId?.trim() || undefined;

    const prevFrom = this.shiftYear(from, -1);
    const prevTo = this.shiftYear(to, -1);
    const prevEndExclusive = this.shiftYear(endExclusive, -1);

    const [current, previous] = await Promise.all([
      this.buildStatsForRange(groupBy, from, to, endExclusive, cyberId),
      this.buildStatsForRange(
        groupBy,
        prevFrom,
        prevTo,
        prevEndExclusive,
        cyberId,
      ),
    ]);

    const response: SalesStatsResponse = {
      groupBy,
      from: from.toISOString().slice(0, 10),
      to: to.toISOString().slice(0, 10),
      cyberId: cyberId ?? null,
      totals: current.totals,
      averages: current.averages,
      buckets: current.buckets,
      previousYear: {
        from: prevFrom.toISOString().slice(0, 10),
        to: prevTo.toISOString().slice(0, 10),
        totals: previous.totals,
        averages: previous.averages,
        buckets: previous.buckets,
      },
    };

    if (!cyberId) {
      response.byCyber = await this.totalsByCyber(from, endExclusive);
    }

    return response;
  }
}
