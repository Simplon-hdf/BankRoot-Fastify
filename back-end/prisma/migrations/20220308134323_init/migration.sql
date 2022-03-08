/*
  Warnings:

  - You are about to drop the column `userId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `personId` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "userId",
ADD COLUMN     "personId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Person" (
    "idPerson" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "numberPerson" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("idPerson")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_mail_key" ON "Person"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "Person_numberPerson_key" ON "Person"("numberPerson");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("idClient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("idPerson") ON DELETE RESTRICT ON UPDATE CASCADE;
