import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { DemandeService } from './demande.service';
import { CreateDemandeDto } from './dto/create-demande.dto';

@Controller('demande')
export class DemandeController {
  constructor(private readonly demandeService: DemandeService) {}

  @Post()
  create(@Body() dto: CreateDemandeDto) {
    return this.demandeService.create(dto);
  }

  @Get()
  findAll() {
    return this.demandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.demandeService.findOne(id);
  }
/*
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDemandeDto,
  ) {
    return this.demandeService.update(id, dto);
  }
*/
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.demandeService.delete(id);
  }
}