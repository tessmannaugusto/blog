import { prisma } from "../lib/db.js";
import { CreateContactInput } from "../schemas/contact.schema.js";

export async function createContact(contact: CreateContactInput) {
  return prisma.contact.create({ data: contact });
}

export async function getAllContacts() {
  return prisma.contact.findMany();
}