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


  async findOne(id: number): Promise<Nutrient> {
    return await this.nutrientRepository.findOne({ where: { id } });
  }

}
