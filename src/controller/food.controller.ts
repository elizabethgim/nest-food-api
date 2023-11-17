import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FoodService } from '../service/food.service';
import { Food } from 'src/dto/food.dto';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) { }

  @Get('/search')
  async searchFood(
    @Query('name') name?: string,
    @Query('year') year?: string,
    @Query('manufacturer') manufacturer?: string,
    @Query('foodCode') foodCode?: string,
  ) {
    const query = new Food();

    if (name == null && year == null && manufacturer == null && foodCode == null) {
      return await this.foodService.findAll();
    }

    if (name !== null && name !== undefined) {
      query.name = name;
    }

    if (year !== null && year !== undefined) {
      query.year = +year;
    }

    if (manufacturer !== null && manufacturer !== undefined) {
      query.maker = manufacturer;
    }

    if (foodCode != null && foodCode !== undefined) {
      query.code = foodCode;
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
