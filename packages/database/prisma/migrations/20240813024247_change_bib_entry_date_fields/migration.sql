/*
  Warnings:

  - Made the column `variableLegend` on table `Equation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Equation" ALTER COLUMN "variableLegend" SET NOT NULL,
ALTER COLUMN "variableLegend" SET DEFAULT '{}';

-- AlterTable
ALTER TABLE "RelatedValues" ALTER COLUMN "input" SET DEFAULT '{}';

-- AlterTable
ALTER TABLE "Settings" ALTER COLUMN "pluginSettings" SET DEFAULT '{}';
