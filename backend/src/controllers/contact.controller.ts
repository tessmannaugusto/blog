import { Request, Response } from "express";
import { getAllContacts, createContact } from "../services/contact.js";

async function getAll(req: Request, res: Response) {
  try {
    const contacts = await getAllContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "could not get contacts." })
  }
}

async function create(req: Request, res: Response) {
  try {
    await createContact(req.body);
    res.status(201).json({ message: "contact created!" });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "could not create contact." })
  }
}


export { getAll, create }