/*
  Warnings:

  - You are about to alter the column `vatPerc` on the `Esoda` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Esoda" ALTER COLUMN "vatPerc" SET DATA TYPE INTEGER;
