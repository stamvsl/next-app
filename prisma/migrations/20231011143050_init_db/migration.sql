-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Esoda" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "q" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "finalPrice" DOUBLE PRECISION NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "vatPerc" DOUBLE PRECISION NOT NULL,
    "vatEuro" DOUBLE PRECISION NOT NULL,
    "forCompany" DOUBLE PRECISION NOT NULL,
    "client" TEXT NOT NULL,

    CONSTRAINT "Esoda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Esoda" ADD CONSTRAINT "Esoda_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
