import { createCustomer } from "./controllers/customer.controller";
import express, { Router } from "express";

const customerRoutes = Router();
customerRoutes.use(express.json())

customerRoutes.post("/customer", createCustomer);
customerRoutes.get("/", (req, res) => {
  res.send("Hello John!");
})

export default customerRoutes;