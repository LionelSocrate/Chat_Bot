import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(){
        const pool = new Pool({ connectionString: process.env.DATABASE_URL})
        const adapter = new PrismaPg(pool)
        super({ adapter });
    }
  onModuleDestroy() {
    throw new Error("Method not implemented.");
  }

    async onModuleInit() {
        await this.$connect
    }
}