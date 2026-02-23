import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  
  const token = authHeader?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: "Token not found." })
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET!)
  } catch (e) {
    console.error(e)
    return res.status(403).json({ error: "Invalid token." })
  }
  console.info("accessed authenticated route.")
  next()
}