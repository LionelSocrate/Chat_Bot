import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // 1. Créer le pool de connexion avec le driver natif 'pg'
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    
    // 2. Créer l'adaptateur Prisma
    const adapter = new PrismaPg(pool);

    // 3. Passer l'adaptateur au constructeur
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}