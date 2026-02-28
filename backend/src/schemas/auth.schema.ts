import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1).max(72)
})

export const validateTokenSchema = z.object({
  token: z.jwt()
})

export type LoginInput = z.infer<typeof loginSchema>
export type ValidateTokenInput = z.infer<typeof validateTokenSchema>