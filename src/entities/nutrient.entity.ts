import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({ name: 'foods' })
export class Nutrient {
    @PrimaryColumn({ type: "int" })
    id: number

    @Column({ type: "varchar" })
    code: string

    @Column({ type: "varchar" })
    group_name: string

    @Column({ type: "varchar" })
    name: string

    @Column({ type: "int" })
    year: number

    @Column({ type: "varchar" })
    maker_name: string

    @Column({ type: "varchar" })
    ref_name: string

    @Column({ type: "int" })
    serving_size: number

    @Column({ type: "double" })
    calorie: number

    @Column({ type: "double" })
    carbohydrate: number

    @Column({ type: "double" })
    protein: number

    @Column({ type: "double" })
    province: number

    @Column({ type: "double" })
    sugars: number

    @Column({ type: "double" })
    salt: number

    @Column({ type: "double" })
    cholesterol: number

    @Column({ type: "double" })
    saturated_fatty_acids: number

    @Column({ type: "double" })
    trans_fat: number
}