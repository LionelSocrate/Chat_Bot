import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ClientModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
