import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10).max(1000),
  slug: z.string().regex(/^[a-z0-9-]+$/)
})

export const deletePostSchema = z.object({
  id: z.string().regex(/^\d+$/).transform(Number)
})

export type CreatePostInput = z.infer<typeof createPostSchema>
export type DeletePostInput = z.infer<typeof deletePostSchema>