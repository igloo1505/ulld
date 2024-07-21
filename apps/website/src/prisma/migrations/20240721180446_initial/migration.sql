
-- CreateTable
CREATE TABLE "FeatureRequest" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "category" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "userBase" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "receivedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeatureRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaitlistRequest" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "receivedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emailsSent" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "WaitlistRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessContact" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "contactPreference" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "purpose" TEXT,

    CONSTRAINT "BusinessContact_pkey" PRIMARY KEY ("id")
);
