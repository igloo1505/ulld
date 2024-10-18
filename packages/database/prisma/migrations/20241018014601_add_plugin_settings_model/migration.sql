/*
  Warnings:

  - You are about to drop the column `pluginSettings` on the `Settings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Settings" DROP COLUMN "pluginSettings";

-- CreateTable
CREATE TABLE "PluginSettings" (
    "pluginName" TEXT NOT NULL,
    "data" JSONB NOT NULL DEFAULT '{}',
    "firstSync" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSync" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PluginSettings_pkey" PRIMARY KEY ("pluginName")
);

-- CreateIndex
CREATE UNIQUE INDEX "PluginSettings_pluginName_key" ON "PluginSettings"("pluginName");
