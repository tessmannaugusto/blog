import { Request, Response } from "express";
import { getAllContacts, createContact, getContact } from "../services/contact.js";
import { Prisma } from "../generated/prisma/client.js";

async function getAll(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = Math.min(parseInt(req.query.limit as string) || 5, 50)
    const contactsData = await getAllContacts(page, limit);
    return res.status(200).json(contactsData);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "could not get contacts." })
  }
}

async function create(req: Request, res: Response) {
  try {
    await createContact(req.body);
    return res.status(201).json({ message: "contact created!" });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return res.status(409).json({ message: "A message from this email already exists." })
      }
    }
    console.error(error)
    return res.status(500).json({ message: "could not create contact." })
  }
}

async function getOne(req: Request, res: Response) {
  try {
    const id = req.params.id as string
    const contact = await getContact(id);
    if (!contact) {
      return res.status(404).json({message: "contact not found"})
    }
    return res.status(200).json(contact)
  } catch (error) {
    return res.status(500).json("could not find contact.")
  }
}


export { getAll, create, getOne }