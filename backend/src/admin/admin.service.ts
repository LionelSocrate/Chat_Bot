import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdminDto } from './admin-dto/admin-user.dto';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}

  async create(dto: CreateAdminDto) {
    return this.prisma.admin.create({
      data: dto ,
    });
  }
  async findAll() {
    return this.prisma.admin.findMany();
  }     
  async findOne(email: string) {
    return this.prisma.admin.findUnique({
      where: {email},    
    })
  }
  async update(email: string, dto: CreateAdminDto) {
    return this.prisma.admin.update({
      where: {email}, 
      data: dto,
    })
  }
  async delete(email: string) {
    return this.prisma.admin.delete({
      where: {email}, 
    })
  }
}
