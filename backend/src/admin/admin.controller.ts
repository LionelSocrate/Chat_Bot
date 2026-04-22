import { Controller, Get, Post, Body, Put, Delete, Param, ParseIntPipe } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse} from "@nestjs/swagger";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./admin-dto/admin-user.dto";

@ApiTags("administrateurs")
@Controller("admin")
export class AdminController {
  constructor(private adminService: AdminService) {}  

  @Get()
  @ApiOperation({ summary: "Récupérer la liste des administrateur" })
  @ApiResponse({ status: 200, description: "Liste utilisateur récupéré avec succès" })
  async findAll() {
    return this.adminService.findAll();
  }
  @Get(":email")
  @ApiOperation({ summary: "Récupérer un utilisateur par son ID" })
  @ApiResponse({ status: 200, description: "Utilisateur récupéré avec succès." })
  @ApiResponse({ status: 404, description: "Utilisateur non trouvé." })
  async findOne(@Param("email") email: string) {
    return this.adminService.findOne(email);
  }

  @Post()
  @ApiOperation({ summary: "Créer un nouvel utilisateur" })
  @ApiResponse({ status: 201, description: "Utilisateur créé avec succès." })
  async create(@Body() dto: CreateAdminDto) {
    return this.adminService.create(dto);
  }

  @Put(":email")
  @ApiOperation({ summary: "Mettre à jour un utilisateur existant" })
  @ApiResponse({ status: 200, description: "Utilisateur mis à jour avec succès." })
  async update(@Param("email") email: string, @Body() dto: CreateAdminDto) {
    return this.adminService.update(email, dto);
  }

  @Delete(":email")
  @ApiOperation({ summary: "Supprimer un utilisateur existant" })
  @ApiResponse({ status: 200, description: "Utilisateur supprimé avec succès." })
  async delete(@Param("email") email: string) {
    return this.adminService.delete(email);
  }


}