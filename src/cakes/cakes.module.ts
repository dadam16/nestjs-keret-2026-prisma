import { Module } from '@nestjs/common';
import { CakesService } from './cakes.service.js';
import { CakesController } from './cakes.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports:[PrismaModule],
  controllers: [CakesController],
  providers: [CakesService],
})
export class CakesModule {}
