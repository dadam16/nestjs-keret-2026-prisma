import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { DrinksService } from './drinks.service.js';
import { CreateDrinkDto } from './dto/create-drink.dto.js';
import { UpdateDrinkDto } from './dto/update-drink.dto.js';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Post()
  create(@Body() createDrinkDto: CreateDrinkDto) {
    return this.drinksService.create(createDrinkDto);
  }

  @Get()
  findAll() {
    return this.drinksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      return await this.drinksService.findOne(+id);
    }catch{
      throw new NotFoundException("No drink whit this ID")
    }
    
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDrinkDto: UpdateDrinkDto) {
    try{
      return await this.drinksService.update(+id, updateDrinkDto);
    }catch{
      throw new NotFoundException("No drink whit this ID")
    }
    
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      return await this.drinksService.remove(+id);
    }catch{
      throw new NotFoundException("No drink whit this ID")
    }
    
  }
}
