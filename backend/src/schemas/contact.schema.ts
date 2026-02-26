import { z } from 'zod'

export const createContactSchema = z.object({
  name: z.string().min(3).max(100),
  message: z.string().min(10).max(5000),
  email: z.email()
})

export const getContactSchema = z.object({
  id: z.string().regex(/^\d+$/).transform(Number)
})

export type CreateContactInput = z.infer<typeof createContactSchema>
export type GetContactInput = z.infer<typeof getContactSchema>