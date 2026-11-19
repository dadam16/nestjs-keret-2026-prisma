import { PartialType } from '@nestjs/mapped-types';
import { CreateCakeDto } from './create-cake.dto.js';

export class UpdateCakeDto extends PartialType(CreateCakeDto) {}
