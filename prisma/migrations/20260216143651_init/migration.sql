-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "categoryId" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Movement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Movement_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StockEntry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "quantityUsed" INTEGER NOT NULL DEFAULT 0,
    "availableQuantity" INTEGER NOT NULL,
    "unitCost" REAL NOT NULL,
    "entryDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "origin" TEXT,
    "reason" TEXT,
    "userId" TEXT,
    CONSTRAINT "StockEntry_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StockExit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalCost" REAL NOT NULL,
    "exitDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "origin" TEXT,
    "reason" TEXT,
    "userId" TEXT,
    CONSTRAINT "StockExit_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StockExitDetail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exitId" INTEGER NOT NULL,
    "entryId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitCost" REAL NOT NULL,
    "subtotal" REAL NOT NULL,
    CONSTRAINT "StockExitDetail_exitId_fkey" FOREIGN KEY ("exitId") REFERENCES "StockExit" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "StockExitDetail_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "StockEntry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StockExitDocument" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reference" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "totalCost" REAL NOT NULL DEFAULT 0,
    "documentDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT,
    "userId" TEXT
);

-- CreateTable
CREATE TABLE "StockExitDocumentLine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "documentId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalCost" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "StockExitDocumentLine_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "StockExitDocument" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "StockExitDocumentLine_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StockExitDocumentLineDetail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lineId" INTEGER NOT NULL,
    "entryId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitCost" REAL NOT NULL,
    "subtotal" REAL NOT NULL,
    CONSTRAINT "StockExitDocumentLineDetail_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "StockExitDocumentLine" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "StockExitDocumentLineDetail_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "StockEntry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE INDEX "StockEntry_productId_entryDate_idx" ON "StockEntry"("productId", "entryDate");

-- CreateIndex
CREATE INDEX "StockExit_productId_exitDate_idx" ON "StockExit"("productId", "exitDate");

-- CreateIndex
CREATE INDEX "StockExitDetail_exitId_idx" ON "StockExitDetail"("exitId");

-- CreateIndex
CREATE INDEX "StockExitDetail_entryId_idx" ON "StockExitDetail"("entryId");

-- CreateIndex
CREATE UNIQUE INDEX "StockExitDocument_reference_key" ON "StockExitDocument"("reference");

-- CreateIndex
CREATE INDEX "StockExitDocument_documentDate_idx" ON "StockExitDocument"("documentDate");

-- CreateIndex
CREATE INDEX "StockExitDocumentLine_documentId_idx" ON "StockExitDocumentLine"("documentId");

-- CreateIndex
CREATE INDEX "StockExitDocumentLine_productId_idx" ON "StockExitDocumentLine"("productId");

-- CreateIndex
CREATE INDEX "StockExitDocumentLineDetail_lineId_idx" ON "StockExitDocumentLineDetail"("lineId");

-- CreateIndex
CREATE INDEX "StockExitDocumentLineDetail_entryId_idx" ON "StockExitDocumentLineDetail"("entryId");
