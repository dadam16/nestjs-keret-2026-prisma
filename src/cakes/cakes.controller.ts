import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CakesService } from './cakes.service.js';
import { CreateCakeDto } from './dto/create-cake.dto.js';
import { UpdateCakeDto } from './dto/update-cake.dto.js';

@Controller('cakes')
export class CakesController {
  constructor(private readonly cakesService: CakesService) {}

  @Post()
  create(@Body() createCakeDto: CreateCakeDto) {
    return this.cakesService.create(createCakeDto);
  }

  @Get()
  findAll() {
    return this.cakesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      return await this.cakesService.findOne(+id);
    }catch{
      throw new NotFoundException("No cake with this ID")
    }
    
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCakeDto: UpdateCakeDto) {
    try{
      return await this.cakesService.update(+id, updateCakeDto);
    }catch{
      throw new NotFoundException("No cake with this ID")
    }
    
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.cakesService.remove(+id);
    } catch {}
    throw new NotFoundException('No cake with this ID');
  }
}
