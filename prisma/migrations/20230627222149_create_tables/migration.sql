-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service-orders" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "printType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "files" TEXT,
    "mockupImg" TEXT,
    "status" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "margin" TEXT NOT NULL,

    CONSTRAINT "service-orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
