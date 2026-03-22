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
  const { tags, ...postData } = newPost;
  return prisma.post.create({
    data: {
      ...postData,
      ...(tags && {
        tags: {
          connectOrCreate: tags.map(tag => ({
            where: { name: tag },
            create: { name: tag }
          }))
        }
      })
    }
  });
}

async function editPost(post: Post) {
  const { tags, ...postData } = post;
  return prisma.post.update({
    where: { id: post.id },
    data: {
      ...postData,
      ... (tags && {
        tags: {
          connectOrCreate: tags.map(tag => ({
            where: { name: tag },
            create: { name: tag }
          }))
        }
      })

    }
  })
}

async function deletePost(id: string) {
  return prisma.post.delete({ where: { id: id } });
}

async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: { slug }
  })
}

export { getAllPosts, createPost, deletePost, editPost, getPostBySlug }