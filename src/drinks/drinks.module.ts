import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service.js';
import { DrinksController } from './drinks.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports:[PrismaModule],
  controllers: [DrinksController],
  providers: [DrinksService],
})
export class DrinksModule {}
