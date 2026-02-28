import { Request, Response } from "express";
import { getAllPosts, createPost, deletePost, editPost, getPostBySlug } from "../services/posts.js";
import { Prisma } from "../../generated/prisma/client.js";

async function getAll(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = Math.min(parseInt(req.query.limit as string) || 5, 50)
    const postData = await getAllPosts(page, limit);
    return res.status(200).json(postData);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "could not get posts." })
  }
}

async function getOneBySlug(req: Request, res: Response) {
  try {
    const slug = req.params.slug as string
    const post = await getPostBySlug(slug);
    return res.status(200).json(post)
  } catch (error) {
    return res.status(404).json("post not found.")
  }
}

async function create(req: Request, res: Response) {
  try {
    await createPost(req.body);
    return res.status(201).json({ message: "post created!" });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return res.status(409).json({
          message: "Já existe um post com esse slug."
        })
      }
    }
    console.error(error)
    return res.status(500).json({ message: "could not create post." })
  }
}

async function edit(req: Request, res: Response) {
  try {
    await editPost(req.body);
    return res.status(200).json({ message: "post updated." })
  } catch (error) {
    return res.status(500).json({ message: "could not update post." })
  }
}

async function deleteOne(req: Request<{ id: string }>, res: Response) {
  try {
    const id = parseInt(req.params.id)
    await deletePost(id)
    return res.status(200).json({ message: `Deleted post: ${id}` })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Error when deleting post." })
  }
}

export { getAll, create, edit, deleteOne, getOneBySlug }