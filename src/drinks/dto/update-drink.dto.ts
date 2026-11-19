import { PartialType } from '@nestjs/mapped-types';
import { CreateDrinkDto } from './create-drink.dto.js';

export class UpdateDrinkDto extends PartialType(CreateDrinkDto) {}
