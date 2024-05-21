/*
  Warnings:

  - You are about to drop the column `firstName` on the `WaitlistRequest` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `WaitlistRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WaitlistRequest" DROP COLUMN "firstName",
DROP COLUMN "lastName";
