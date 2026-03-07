import { Request, Response } from "express";
import { authLogin } from "../services/auth.js";


async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const token = await authLogin({ email, password })
    res.status(200).json({ token });
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: "Invalid credentials." })
  }
}


export { login }