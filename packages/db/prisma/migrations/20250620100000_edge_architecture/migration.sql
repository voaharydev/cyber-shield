-- Edge architecture: source tracking, presence, Supabase Auth linkage

CREATE TYPE "SourceMiseAJour" AS ENUM ('LOCAL', 'CLOUD');

ALTER TABLE "User" ADD COLUMN "email" TEXT;
ALTER TABLE "User" ADD COLUMN "supabaseUserId" TEXT;

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_supabaseUserId_key" ON "User"("supabaseUserId");

ALTER TABLE "SessionOrdinateur" ADD COLUMN "sourceMiseAJour" "SourceMiseAJour" NOT NULL DEFAULT 'LOCAL';
ALTER TABLE "SessionOrdinateur" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE "PostePresence" (
    "id" TEXT NOT NULL,
    "cyberId" TEXT NOT NULL,
    "numeroPoste" INTEGER NOT NULL,
    "connected" BOOLEAN NOT NULL DEFAULT false,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostePresence_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "PostePresence_cyberId_numeroPoste_key" ON "PostePresence"("cyberId", "numeroPoste");
CREATE INDEX "PostePresence_cyberId_idx" ON "PostePresence"("cyberId");

ALTER TABLE "PostePresence" ADD CONSTRAINT "PostePresence_cyberId_fkey" FOREIGN KEY ("cyberId") REFERENCES "Cyber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Backfill emails for existing users (username@cybercontrol.local)
UPDATE "User" SET "email" = LOWER("username") || '@cybercontrol.local' WHERE "email" IS NULL;
