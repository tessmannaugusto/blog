import { prisma } from '../lib/db.js'
import { CreatePostInput, Post } from '../schemas/post.schema.js';



async function getAllPosts(page: number, limit: number) {
  const skip = (page - 1) * limit;

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: limit
    }),
    prisma.post.count()
  ])
  return {
    posts,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  }
}

async function createPost(newPost: CreatePostInput) {
  return prisma.post.create({
    data: newPost
  });
}

async function editPost(post: Post) {
  return prisma.post.update({
    where: { id: post.id },
    data: post
  })
}

async function deletePost(id: number) {
  return prisma.post.delete({ where: { id: id } });
}

async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: {slug}
  })
}

export { getAllPosts, createPost, deletePost, editPost, getPostBySlug }