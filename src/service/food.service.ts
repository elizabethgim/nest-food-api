import { Injectable } from '@nestjs/common';


@Injectable()
export class FoodService {

  findAll() {
    return `This action returns all food`;
  }

  findOne(id: number) {
    return `This action returns a #${id} food`;
  }

}
