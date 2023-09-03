import { db } from "../database";
import { Customer } from "../models/customer.model";

export const createCustomerService = async (body: any) => {
  const customerRepository = db.getRepository(Customer);
  const customer = customerRepository.create(body);
  await customerRepository.save(customer);
  return customer;
};