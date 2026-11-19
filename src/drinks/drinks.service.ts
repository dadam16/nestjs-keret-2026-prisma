import { Injectable } from '@nestjs/common';
import { CreateDrinkDto } from './dto/create-drink.dto.js';
import { UpdateDrinkDto } from './dto/update-drink.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DrinksService {

  constructor(private readonly db:PrismaService){}

  create(createDrinkDto: CreateDrinkDto) {
    return this.db.drink.create({
      data:createDrinkDto
    })
  }

  findAll() {
    return this.db.drink.findMany();
  }

  findOne(id: number) {
    return this.db.drink.findUniqueOrThrow({
      where:{
        id
      }
    })
  }

  update(id: number, updateDrinkDto: UpdateDrinkDto) {
    return this.db.drink.update({
      data:updateDrinkDto,
      where:{id}
    })
  }

  remove(id: number) {
    return this.db.drink.delete({
      where:{
        id
      }
    });
  }
}
