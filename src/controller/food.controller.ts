import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FoodService } from '../service/food.service';
import { Food } from 'src/dto/food.dto';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) { }

  @Get()
  async searchFood(
    @Query('name') name?: string,
    @Query('year') year?: string,
    @Query('manufacturer') manufacturer?: string,
    @Query('foodCode') foodCode?: string,
  ) {
    const query: Food = {
      name: name,
      year: +year,
      maker: manufacturer,
      code: foodCode
    }
    return await this.foodService.find(query);
  }

  @Get()
  findAll() {
    return this.foodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(+id);
  }
}
