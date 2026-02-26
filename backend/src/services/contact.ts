import { prisma } from "../lib/db.js";
import { CreateContactInput } from "../schemas/contact.schema.js";

async function createContact(contact: CreateContactInput) {
  return prisma.contact.create({ data: contact });
}

async function getAllContacts(page: number, limit: number) {
  const skip = (page - 1) * limit;
  const [contacts, total] = await Promise.all([prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
    skip,
    take: limit
  }),
  prisma.contact.count()
  ]);
  return {
    contacts,
    pagination: {
      page,
      total,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  }
}

async function getContact(id: number) {
  return prisma.contact.findUnique({
    where: {id}
  })
}

export { createContact, getAllContacts, getContact}