import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from 'src/dto/food.dto';
import { Nutrient } from 'src/entities/nutrient.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';


@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Nutrient)
    private nutrientRepository: Repository<Nutrient>,
  ) { }

  async find(food: Food) {
    const queryBuilder = this.nutrientRepository.createQueryBuilder('foods');

    if (food.name !== undefined && food.name !== null) {
      queryBuilder.andWhere('foods.name = :name', { name: food.name });
    }

    if (food.year !== undefined && food.year !== null) {
      queryBuilder.andWhere('foods.year = :year', { year: food.year });
    }

    if (food.maker !== undefined && food.maker !== null) {
      queryBuilder.andWhere('foods.maker_name = :maker', { maker: food.maker });
    }

    if (food.code !== undefined && food.code !== null) {
      queryBuilder.andWhere('foods.code = :code', { code: food.code });
    }

    return await queryBuilder.getMany();
  }

  async findAll() {
    return await this.nutrientRepository.find();
  }

  async findOne(id: number): Promise<Nutrient> {
    return await this.nutrientRepository.findOne({ where: { id } });
  }

}
