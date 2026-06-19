-- CreateEnum
CREATE TYPE "TypeMouvementFidelite" AS ENUM ('GAIN_ACHAT', 'ECHANGE_MINUTES', 'ECHANGE_REDUCTION');

-- CreateTable
CREATE TABLE "FideliteConfig" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "pointsParMinuteAchat" INTEGER NOT NULL DEFAULT 1,
    "pointsPourMinuteGratuite" INTEGER NOT NULL DEFAULT 10,
    "pointsPour100Ar" INTEGER NOT NULL DEFAULT 5,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FideliteConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientFidelite" (
    "id" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "nom" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClientFidelite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MouvementFidelite" (
    "id" TEXT NOT NULL,
    "cyberId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "type" "TypeMouvementFidelite" NOT NULL,
    "points" INTEGER NOT NULL,
    "ticketId" TEXT,
    "employeId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MouvementFidelite_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN "clientFideliteId" TEXT,
ADD COLUMN "pointsGagnes" INTEGER,
ADD COLUMN "pointsUtilises" INTEGER,
ADD COLUMN "minutesBonus" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "reductionAr" DECIMAL(10,2);

-- CreateIndex
CREATE UNIQUE INDEX "ClientFidelite_telephone_key" ON "ClientFidelite"("telephone");

-- CreateIndex
CREATE INDEX "MouvementFidelite_clientId_createdAt_idx" ON "MouvementFidelite"("clientId", "createdAt");

-- CreateIndex
CREATE INDEX "MouvementFidelite_cyberId_createdAt_idx" ON "MouvementFidelite"("cyberId", "createdAt");

-- CreateIndex
CREATE INDEX "Ticket_clientFideliteId_idx" ON "Ticket"("clientFideliteId");

-- AddForeignKey
ALTER TABLE "MouvementFidelite" ADD CONSTRAINT "MouvementFidelite_cyberId_fkey" FOREIGN KEY ("cyberId") REFERENCES "Cyber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MouvementFidelite" ADD CONSTRAINT "MouvementFidelite_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "ClientFidelite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MouvementFidelite" ADD CONSTRAINT "MouvementFidelite_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MouvementFidelite" ADD CONSTRAINT "MouvementFidelite_employeId_fkey" FOREIGN KEY ("employeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_clientFideliteId_fkey" FOREIGN KEY ("clientFideliteId") REFERENCES "ClientFidelite"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Seed default config
INSERT INTO "FideliteConfig" ("id", "pointsParMinuteAchat", "pointsPourMinuteGratuite", "pointsPour100Ar", "actif", "updatedAt")
VALUES ('default', 1, 10, 5, true, CURRENT_TIMESTAMP);
