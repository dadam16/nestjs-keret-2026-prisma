import { Injectable } from '@nestjs/common';
import { CreateCakeDto } from './dto/create-cake.dto.js';
import { UpdateCakeDto } from './dto/update-cake.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CakesService {

  constructor(private readonly db:PrismaService){
  }

  create(createCakeDto: CreateCakeDto) {
    return this.db.cake.create({
      data:createCakeDto
    });
  }

  findAll() {
    return this.db.cake.findMany();
  }

  findOne(id: number) {
    return this.db.cake.findUniqueOrThrow({
      where:{
        id
      }
    });
  }

  update(id: number, updateCakeDto: UpdateCakeDto) {
    return this.db.cake.update({
      data: updateCakeDto,
      where:{id}
    });
  }

  remove(id: number) {
    return this.db.cake.delete({
      where:{
        id
      }
    });
  }
}
