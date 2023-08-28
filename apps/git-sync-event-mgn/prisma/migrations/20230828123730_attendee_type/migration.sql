-- CreateEnum
CREATE TYPE "EnumEventEventType" AS ENUM ('Tech', 'Design');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "eventType" "EnumEventEventType";
