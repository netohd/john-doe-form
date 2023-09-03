import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

enum RainbowColor {
  RED = 'red',
  ORANGE = 'orange',
  YELLOW = 'yellow',
  GREEN = 'green',
  BLUE = 'blue',
  INDIGO = 'indigo',
  VIOLET = 'violet',
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

  @Column("text")
  obs: string;
}
