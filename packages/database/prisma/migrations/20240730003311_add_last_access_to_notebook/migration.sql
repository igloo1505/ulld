/*
  Warnings:

  - Changed the type of `language` on the `Snippet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Ipynb" ADD COLUMN     "lastAccess" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "MdxNote" ALTER COLUMN "lastAccess" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Snippet" DROP COLUMN "language",
ADD COLUMN     "language" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Technologies";
