-- CreateTable
CREATE TABLE "Configuration" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "nombrePostes" INTEGER NOT NULL DEFAULT 12,
    "dureesTicket" INTEGER[],
    "nomEtablissement" TEXT NOT NULL DEFAULT 'CyberControl',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);

-- Insert default configuration
INSERT INTO "Configuration" ("id", "nombrePostes", "dureesTicket", "nomEtablissement", "updatedAt")
VALUES ('default', 12, ARRAY[30, 60, 90, 120], 'CyberControl', CURRENT_TIMESTAMP);
