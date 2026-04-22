import { Controller, Get, Post, Body, Put, Delete, Param, ParseIntPipe } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse} from "@nestjs/swagger";
import { ClientService } from "./client.service";
import { CreateClientDto } from "./client-dto/client-user.dto"; 

@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService) {}

    @ApiTags('Client')
    @ApiOperation({ summary: 'Get all clients' })
    @ApiResponse({ status: 200, description: 'List of clients retrieved successfully.' })
    @Get()
    async getAllClients() {
        return this.clientService.getAllClients();
    }
    @ApiTags('Client')
    @ApiOperation({ summary: 'Create a new client' })
    @ApiResponse({ status: 201, description: 'Client created successfully.' })
    @Post()
    async createClient(@Body() dto: CreateClientDto) {
        return this.clientService.createClient(dto);
    }
}
