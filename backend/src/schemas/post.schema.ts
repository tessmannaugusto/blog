import { uuid, z } from 'zod'

export const postSchema = z.object({
  id: z.uuid(),
  title: z.string().min(3).max(100),
  content: z.string().min(10).max(1000),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  createdAt: z.string()
})

export const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10).max(1000),
  slug: z.string().regex(/^[a-z0-9-]+$/)
})

export const deletePostSchema = z.object({
  id: z.uuid()
})

export const getPostBySlugSchema = z.object({
  slug: z.string()
})

export const getPostsSchema = z.object({
  page: z.string().regex(/^\d+$/).transform(Number),
  limit: z.string().regex(/^\d+$/).transform(Number)
})

export type Post = z.infer<typeof postSchema>
export type CreatePostInput = z.infer<typeof createPostSchema>
export type DeletePostInput = z.infer<typeof deletePostSchema>
export type GetPostsInput = z.infer<typeof getPostsSchema>