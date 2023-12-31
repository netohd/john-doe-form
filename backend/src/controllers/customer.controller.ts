import { Request, Response } from "express";
import { createCustomerService } from "../services/customer.service";

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const result = await createCustomerService(req.body);
    return res.status(200).json({
      message: 'Customer created sucessful',
      ...result
    });
  } catch (error) {
    console.error('Error to create customer:', error);
    return res.status(400).json({
      error: 'An error occurs during customer create.'
    });
  }
};