-- CreateTable
CREATE TABLE "Exoda" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "q" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "invoiceNumber" TEXT,
    "finalPrice" DOUBLE PRECISION NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "vatPerc" INTEGER NOT NULL,
    "vatEuro" DOUBLE PRECISION NOT NULL,
    "client" TEXT NOT NULL,
    "comments" TEXT,

    CONSTRAINT "Exoda_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exoda" ADD CONSTRAINT "Exoda_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
