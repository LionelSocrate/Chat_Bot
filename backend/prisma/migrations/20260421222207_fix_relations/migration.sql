-- CreateTable
CREATE TABLE "Admin" (
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "agence" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Client" (
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "tel" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Demande" (
    "id" SERIAL NOT NULL,
    "dateD" TIMESTAMP(3) NOT NULL,
    "validation" BOOLEAN NOT NULL,
    "zone" TEXT NOT NULL,
    "datePlacement" TIMESTAMP(3) NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,

    CONSTRAINT "Demande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payement" (
    "id" SERIAL NOT NULL,
    "dateP" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "montant" DOUBLE PRECISION NOT NULL,
    "consomation" DOUBLE PRECISION NOT NULL,
    "tva" DOUBLE PRECISION NOT NULL,
    "numTel" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,

    CONSTRAINT "payement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recommendation" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,

    CONSTRAINT "Recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipement" (
    "refEquipement" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "clientEmail" TEXT NOT NULL,

    CONSTRAINT "Equipement_pkey" PRIMARY KEY ("refEquipement")
);

-- CreateTable
CREATE TABLE "Compteur" (
    "refCompteur" TEXT NOT NULL,
    "dateInstallation" TIMESTAMP(3) NOT NULL,
    "clientEmail" TEXT NOT NULL,

    CONSTRAINT "Compteur_pkey" PRIMARY KEY ("refCompteur")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_tel_key" ON "Admin"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_tel_key" ON "Client"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "Equipement_refEquipement_key" ON "Equipement"("refEquipement");

-- CreateIndex
CREATE UNIQUE INDEX "Compteur_refCompteur_key" ON "Compteur"("refCompteur");

-- AddForeignKey
ALTER TABLE "Demande" ADD CONSTRAINT "Demande_clientEmail_fkey" FOREIGN KEY ("clientEmail") REFERENCES "Client"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demande" ADD CONSTRAINT "Demande_adminEmail_fkey" FOREIGN KEY ("adminEmail") REFERENCES "Admin"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payement" ADD CONSTRAINT "payement_clientEmail_fkey" FOREIGN KEY ("clientEmail") REFERENCES "Client"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_clientEmail_fkey" FOREIGN KEY ("clientEmail") REFERENCES "Client"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipement" ADD CONSTRAINT "Equipement_clientEmail_fkey" FOREIGN KEY ("clientEmail") REFERENCES "Client"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compteur" ADD CONSTRAINT "Compteur_clientEmail_fkey" FOREIGN KEY ("clientEmail") REFERENCES "Client"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
