import { Module } from '@nestjs/common';
import { FoodService } from '../service/food.service';
import { FoodController } from '../controller/food.controller';

@Module({
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule { }
