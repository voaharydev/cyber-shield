-- CreateTable
CREATE TABLE "Cyber" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "nombrePostes" INTEGER NOT NULL DEFAULT 12,
    "dureesTicket" INTEGER[],
    "prixParMinute" DECIMAL(10,2) NOT NULL DEFAULT 100,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cyber_pkey" PRIMARY KEY ("id")
);

-- Migrate Configuration -> Cyber
INSERT INTO "Cyber" ("id", "nom", "nombrePostes", "dureesTicket", "prixParMinute", "createdAt", "updatedAt")
SELECT
    'cyber_legacy_default',
    "nomEtablissement",
    "nombrePostes",
    "dureesTicket",
    "prixParMinute",
    CURRENT_TIMESTAMP,
    "updatedAt"
FROM "Configuration"
WHERE "id" = 'default';

INSERT INTO "Cyber" ("id", "nom", "nombrePostes", "dureesTicket", "prixParMinute", "createdAt", "updatedAt")
SELECT 'cyber_legacy_default', 'CyberControl', 12, ARRAY[30, 60, 90, 120]::INTEGER[], 100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM "Cyber" WHERE "id" = 'cyber_legacy_default');

-- User.cyberId
ALTER TABLE "User" ADD COLUMN "cyberId" TEXT;
UPDATE "User" SET "cyberId" = 'cyber_legacy_default' WHERE "role" = 'STAFF';
ALTER TABLE "User" ADD CONSTRAINT "User_cyberId_fkey" FOREIGN KEY ("cyberId") REFERENCES "Cyber"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Ticket.cyberId
ALTER TABLE "Ticket" ADD COLUMN "cyberId" TEXT;
UPDATE "Ticket" SET "cyberId" = 'cyber_legacy_default';
ALTER TABLE "Ticket" ALTER COLUMN "cyberId" SET NOT NULL;
DROP INDEX IF EXISTS "Ticket_codeUnique_key";
CREATE UNIQUE INDEX "Ticket_cyberId_codeUnique_key" ON "Ticket"("cyberId", "codeUnique");
CREATE INDEX "Ticket_cyberId_statut_idx" ON "Ticket"("cyberId", "statut");
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_cyberId_fkey" FOREIGN KEY ("cyberId") REFERENCES "Cyber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- SessionOrdinateur.cyberId
ALTER TABLE "SessionOrdinateur" ADD COLUMN "cyberId" TEXT;
UPDATE "SessionOrdinateur" SET "cyberId" = 'cyber_legacy_default';
ALTER TABLE "SessionOrdinateur" ALTER COLUMN "cyberId" SET NOT NULL;
DROP INDEX IF EXISTS "SessionOrdinateur_numeroPoste_key";
CREATE UNIQUE INDEX "SessionOrdinateur_cyberId_numeroPoste_key" ON "SessionOrdinateur"("cyberId", "numeroPoste");
CREATE INDEX "SessionOrdinateur_cyberId_idx" ON "SessionOrdinateur"("cyberId");
ALTER TABLE "SessionOrdinateur" ADD CONSTRAINT "SessionOrdinateur_cyberId_fkey" FOREIGN KEY ("cyberId") REFERENCES "Cyber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- TransactionCaisse.cyberId
ALTER TABLE "TransactionCaisse" ADD COLUMN "cyberId" TEXT;
UPDATE "TransactionCaisse" SET "cyberId" = 'cyber_legacy_default';
ALTER TABLE "TransactionCaisse" ALTER COLUMN "cyberId" SET NOT NULL;
CREATE INDEX "TransactionCaisse_cyberId_dateTransaction_idx" ON "TransactionCaisse"("cyberId", "dateTransaction");
ALTER TABLE "TransactionCaisse" ADD CONSTRAINT "TransactionCaisse_cyberId_fkey" FOREIGN KEY ("cyberId") REFERENCES "Cyber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Drop Configuration
DROP TABLE "Configuration";
