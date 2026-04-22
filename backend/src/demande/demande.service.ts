import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDemandeDto } from './dto/create-demande.dto';

@Injectable()
export class DemandeService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateDemandeDto) {
    return this.prisma.demande.create({
      data: {
        ...dto,
        dateD: new Date(dto.dateD),
        datePlacement: new Date(dto.datePlacement),
      },
    });
  }

  async findAll() {
    return this.prisma.demande.findMany({
      include: {
        client: true,
        admin: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.demande.findUnique({
      where: { id },
      include: {
        client: true,
        admin: true,
      },
    });
  }
/*
  async update(id: number, dto: UpdateDemandeDto) {
    return this.prisma.demande.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.dateD && { dateD: new Date(dto.dateD) }),
        ...(dto.datePlacement && {
          datePlacement: new Date(dto.datePlacement),
        }),
      },
    });
  }
*/
  async delete(id: number) {
    return this.prisma.demande.delete({
      where: { id },
    });
  }
}