/*
  Warnings:

  - The `status` column on the `ToDo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `lastAccess` on table `BibEntry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastAccess` on table `Definition` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastAccess` on table `Equation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastAccess` on table `Ipynb` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastAccess` on table `MdxNote` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `pluginSettings` to the `Settings` table without a default value. This is not possible if the table is not empty.
  - Made the column `lastAccess` on table `Subject` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastAccess` on table `Tag` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastAccess` on table `ToDoList` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastAccess` on table `Topic` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BibEntry" ALTER COLUMN "lastAccess" SET NOT NULL;

-- AlterTable
ALTER TABLE "Definition" ALTER COLUMN "lastAccess" SET NOT NULL;

-- AlterTable
ALTER TABLE "Equation" ALTER COLUMN "lastAccess" SET NOT NULL;

-- AlterTable
ALTER TABLE "Ipynb" ALTER COLUMN "lastAccess" SET NOT NULL;

-- AlterTable
ALTER TABLE "MdxNote" ALTER COLUMN "lastAccess" SET NOT NULL;

-- AlterTable
ALTER TABLE "Settings" ADD COLUMN     "pluginSettings" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Subject" ALTER COLUMN "lastAccess" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "lastAccess" SET NOT NULL;

-- AlterTable
ALTER TABLE "ToDo" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'ToDo';

-- AlterTable
ALTER TABLE "ToDoList" ALTER COLUMN "lastAccess" SET NOT NULL;

-- AlterTable
ALTER TABLE "Topic" ALTER COLUMN "lastAccess" SET NOT NULL;

-- DropEnum
DROP TYPE "ToDoListStatus";
