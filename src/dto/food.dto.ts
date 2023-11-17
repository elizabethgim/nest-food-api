import { IsNumber, IsString } from 'class-validator';

export class Food {
    @IsString()
    name: string

    @IsNumber()
    year: number

    @IsString()
    maker: string

    @IsString()
    code: string
}
