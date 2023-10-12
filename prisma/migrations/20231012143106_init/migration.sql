/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Album" ALTER COLUMN "id" SET DEFAULT concat('abm_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "id" SET DEFAULT concat('img_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "id" SET DEFAULT concat('tag_', replace(cast(gen_random_uuid() as text), '-', ''));

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");
