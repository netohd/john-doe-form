import { DataSource } from "typeorm"
import { Customer } from "../models/customer.model"
import dotenv from "dotenv"
dotenv.config();

export const db = new DataSource({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Customer],
  subscribers: [],
  migrations: [],
})