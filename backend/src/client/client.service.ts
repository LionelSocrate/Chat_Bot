import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { CreateClientDto } from './client-dto/client-user.dto';


@Injectable()
export class ClientService {
    constructor(private prisma: PrismaService) {}
    async getAllClients() {
        return this.prisma.client.findMany();
    }
    async createClient(dto: CreateClientDto) {
        return this.prisma.client.create({
            data: {
                email: dto.email,
                nom: dto.nom,
                adresse: dto.adresse,
                tel: dto.tel,
            },
        });
    }
    
}

