import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';
import { DemandeModule } from './demande/demande.module';

@Module({
  imports: [ClientModule, AdminModule, PrismaModule, DemandeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
