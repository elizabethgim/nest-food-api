import { Module } from '@nestjs/common';

import { FoodModule } from './food.module';

@Module({
  imports: [FoodModule],
})
export class AppModule { }
