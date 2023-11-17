import { Module } from '@nestjs/common';
import { FoodService } from '../service/food.service';
import { FoodController } from '../controller/food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nutrient } from 'src/entities/nutrient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nutrient])],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule { }
