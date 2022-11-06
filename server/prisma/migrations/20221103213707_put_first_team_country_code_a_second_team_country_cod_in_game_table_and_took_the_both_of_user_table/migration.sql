/*
  Warnings:

  - You are about to drop the column `firstTeamCountryCode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `secondTeamCountryCode` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstTeamCountryCode` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondTeamCountryCode` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstTeamCountryCode" TEXT NOT NULL,
    "secondTeamCountryCode" TEXT NOT NULL
);
INSERT INTO "new_Game" ("id") SELECT "id" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("avatarUrl", "createAt", "email", "id", "name") SELECT "avatarUrl", "createAt", "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
