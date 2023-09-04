import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum RainbowColor {
  RED = 'Vermelho',
  ORANGE = 'Laranja',
  YELLOW = 'Amarelo',
  GREEN = 'Verde',
  BLUE = 'Azul',
  INDIGO = 'Anil',
  VIOLET = 'Violeta'
}

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: RainbowColor
  })
  favColor: RainbowColor;

  @Column("text", { nullable: true })
  obs: string;
}
