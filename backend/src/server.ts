import "reflect-metadata"
import customerRoutes from "./routes";
import { db } from "./database";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors())
app.use(customerRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server initiated on ${process.env.PORT} port`);
  db.initialize()
    .then(() => {
      console.log("Connection with database is ready.")
    })
    .catch((error) => console.log(error))
})

