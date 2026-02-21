import { prisma } from "../lib/db.js";
import { LoginInput } from "../schemas/login.schema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function authLogin(contact: LoginInput) {
  if (contact.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Invalid credentials.")
  }
  const validPassword = bcrypt.compare(contact.password, process.env.ADMIN_PASSWORD_HASH || "");
  if (!validPassword) {
    throw new Error("Invalid credentials.")
  }
  const token = jwt.sign(
    {
      email: contact.email, role: 'admin'
    },
    process.env.JWT_SECRET || "",
    { expiresIn: '7d' }
  )
  return token
}