import { prisma } from "../lib/db.js";
import { CreateContactInput } from "../schemas/contact.schema.js";

export async function createContact(contact: CreateContactInput) {
  console.log("creating contact ", JSON.stringify(contact))
  return prisma.contact.create({ data: contact });
}

export async function getAllContacts() {
  console.log("getting all contacts!")
  return prisma.contact.findMany();
}