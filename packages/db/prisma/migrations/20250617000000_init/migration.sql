-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STAFF');
CREATE TYPE "StatutTicket" AS ENUM ('VALIDE', 'ACTIVE', 'EXPIRE');
CREATE TYPE "StatutPoste" AS ENUM ('VERROUILLE', 'EN_COURS');
CREATE TYPE "TypePaiement" AS ENUM ('ESPECES', 'MOBILE_MONEY', 'CARTE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STAFF',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "codeUnique" TEXT NOT NULL,
    "tempsInitial" INTEGER NOT NULL,
    "tempsRestant" INTEGER NOT NULL,
    "statut" "StatutTicket" NOT NULL DEFAULT 'VALIDE',
    "creeParId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SessionOrdinateur" (
    "id" TEXT NOT NULL,
    "numeroPoste" INTEGER NOT NULL,
    "statut" "StatutPoste" NOT NULL DEFAULT 'VERROUILLE',
    "ticketActuelId" TEXT,
    CONSTRAINT "SessionOrdinateur_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TransactionCaisse" (
    "id" TEXT NOT NULL,
    "montant" DECIMAL(10,2) NOT NULL,
    "typePaiement" "TypePaiement" NOT NULL,
    "description" TEXT NOT NULL,
    "dateTransaction" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "employeId" TEXT NOT NULL,
    CONSTRAINT "TransactionCaisse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "Ticket_codeUnique_key" ON "Ticket"("codeUnique");
CREATE INDEX "Ticket_statut_idx" ON "Ticket"("statut");
CREATE INDEX "Ticket_codeUnique_idx" ON "Ticket"("codeUnique");
CREATE UNIQUE INDEX "SessionOrdinateur_numeroPoste_key" ON "SessionOrdinateur"("numeroPoste");
CREATE INDEX "SessionOrdinateur_numeroPoste_idx" ON "SessionOrdinateur"("numeroPoste");
CREATE INDEX "TransactionCaisse_dateTransaction_idx" ON "TransactionCaisse"("dateTransaction");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_creeParId_fkey" FOREIGN KEY ("creeParId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "SessionOrdinateur" ADD CONSTRAINT "SessionOrdinateur_ticketActuelId_fkey" FOREIGN KEY ("ticketActuelId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "TransactionCaisse" ADD CONSTRAINT "TransactionCaisse_employeId_fkey" FOREIGN KEY ("employeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
