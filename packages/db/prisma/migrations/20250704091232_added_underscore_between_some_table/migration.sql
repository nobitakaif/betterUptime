/*
  Warnings:

  - You are about to drop the `websiteTicks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "websiteTicks" DROP CONSTRAINT "websiteTicks_region_id_fkey";

-- DropForeignKey
ALTER TABLE "websiteTicks" DROP CONSTRAINT "websiteTicks_website_id_fkey";

-- DropTable
DROP TABLE "websiteTicks";

-- CreateTable
CREATE TABLE "website_ticks" (
    "id" TEXT NOT NULL,
    "response_time_ms" INTEGER NOT NULL,
    "status" "WebsiteStatus" NOT NULL,
    "region_id" TEXT NOT NULL,
    "website_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "website_ticks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "website_ticks" ADD CONSTRAINT "website_ticks_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "website_ticks" ADD CONSTRAINT "website_ticks_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
