import { RainbowColor } from "../models/customer.model"

export interface ICreateCustomer {
  name: string
  cpf: string
  email: string
  favColor: RainbowColor
  obs: string
}