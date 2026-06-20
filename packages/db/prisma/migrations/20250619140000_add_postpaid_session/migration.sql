-- CreateEnum
CREATE TYPE "TypeSession" AS ENUM ('PREPAID', 'POSTPAID');

-- AlterEnum
ALTER TYPE "StatutPoste" ADD VALUE 'A_PAYER';

-- AlterTable
ALTER TABLE "SessionOrdinateur" ADD COLUMN "typeSession" "TypeSession",
ADD COLUMN "baseTarifHoraire" DECIMAL(10,2) NOT NULL DEFAULT 2.00,
ADD COLUMN "tempsDebut" TIMESTAMP(3),
ADD COLUMN "tempsFin" TIMESTAMP(3),
ADD COLUMN "montantDu" DECIMAL(10,2);
