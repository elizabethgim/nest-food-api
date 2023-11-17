import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodService } from '../service/food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) { }

  @Get()
  findAll() {
    return this.foodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(+id);
  }
}
