import { db } from "../database";
import { ICreateCustomer } from "../dto/customer.input";
import { Customer } from "../models/customer.model";

export const createCustomerService = async (body: ICreateCustomer) => {
  const customerRepository = db.getRepository(Customer);
  const existingCustomer = await customerRepository.findOne({ where: { cpf: body.cpf } });

  if (existingCustomer) {
    throw new Error("Já existe um cliente com este CPF.");
  }

  const customer = customerRepository.create(body);
  await customerRepository.save(customer);
  return customer;
};