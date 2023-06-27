-- CreateTable
CREATE TABLE "serviceOrders" (
    "id" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "printType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "files" TEXT NOT NULL,
    "mockupImg" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "margin" TEXT NOT NULL,

    CONSTRAINT "serviceOrders_pkey" PRIMARY KEY ("id")
);
