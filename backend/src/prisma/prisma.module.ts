import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Optionnel : rend le service disponible partout sans import manuel
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // CRUCIAL : permet l'injection dans d'autres services
})
export class PrismaModule {}