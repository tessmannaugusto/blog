import { Request, Response } from "express";
import { getAllContacts, createContact, getContact } from "../services/contact.js";

async function getAll(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 5
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
    console.error(error)
    return res.status(500).json({ message: "could not create contact." })
  }
}

async function getOne(req: Request, res: Response) {
  try {
    console.log("entenred getOne Contact route")
    const id = parseInt(req.params.id as string) || 1
    const contact = await getContact(id);
    if (!contact) {
      return res.status(404).json({message: "contact not found"})
    }
    return res.status(200).json(contact)
  } catch (error) {
    console.log(error);
    return res.status(500).json("could not find contact.")
  }
}


export { getAll, create, getOne }