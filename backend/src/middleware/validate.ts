import { Request, Response, NextFunction } from 'express'
import { ZodObject } from 'zod';

type ValidateSource = 'body' | 'params' | 'query'

export function validate(schema: ZodObject, source: ValidateSource = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[source]);
    
    if (!result.success) {
      return res.status(400).json({ errors: result.error })
    }

    req[source] = result.data;
    next()
  }
}