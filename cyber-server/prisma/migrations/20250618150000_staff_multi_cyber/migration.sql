-- AlterTable
ALTER TABLE "User" ADD COLUMN "isActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "UserCyber" (
    "userId" TEXT NOT NULL,
    "cyberId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserCyber_pkey" PRIMARY KEY ("userId","cyberId")
);

-- Backfill from User.cyberId
INSERT INTO "UserCyber" ("userId", "cyberId", "assignedAt")
SELECT "id", "cyberId", CURRENT_TIMESTAMP
FROM "User"
WHERE "cyberId" IS NOT NULL;

-- Drop old relation
ALTER TABLE "User" DROP CONSTRAINT IF EXISTS "User_cyberId_fkey";
ALTER TABLE "User" DROP COLUMN "cyberId";

-- CreateIndex
CREATE INDEX "UserCyber_cyberId_idx" ON "UserCyber"("cyberId");

-- AddForeignKey
ALTER TABLE "UserCyber" ADD CONSTRAINT "UserCyber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "UserCyber" ADD CONSTRAINT "UserCyber_cyberId_fkey" FOREIGN KEY ("cyberId") REFERENCES "Cyber"("id") ON DELETE CASCADE ON UPDATE CASCADE;
