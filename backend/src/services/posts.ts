import { prisma } from '../lib/db.js'
import { CreatePostInput } from '../schemas/post.schema.js';



async function getAllPosts() {
  console.info("getting all posts from db...")
  return prisma.post.findMany();
}

async function createPost(newPost: CreatePostInput) {
  return prisma.post.create({
    data: newPost
  });
}

async function editPost() {
  return prisma.post.findMany();
}

async function deletePost(id: number) {
  return prisma.post.delete({ where: { id: id } });
}

export { getAllPosts, createPost, deletePost, editPost }