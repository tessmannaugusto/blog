import { z } from 'zod'

export const createContactSchema = z.object({
  name: z.string().min(1).max(100),
  message: z.string().min(1).max(5000),
  email: z.email()
})

export const getContactSchema = z.object({
  id: z.uuid()
})

export const deleteContactSchema = z.object({
  id: z.uuid()
})

export type CreateContactInput = z.infer<typeof createContactSchema>
export type GetContactInput = z.infer<typeof getContactSchema>