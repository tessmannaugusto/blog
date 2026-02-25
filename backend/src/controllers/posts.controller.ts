import { Request, Response } from "express";
import { getAllPosts, createPost, deletePost, editPost } from "../services/posts.js";

async function getAll(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 5
    const posts = await getAllPosts(page, limit);
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "could not get posts." })
  }

}

async function create(req: Request, res: Response) {
  try {
    await createPost(req.body);
    res.status(201).json({ message: "post created!" });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "could not create post." })
  }
}

async function edit(req: Request, res: Response) {
  console.log("edit post route")
  try {
    await editPost(req.body);
    res.status(200).json({ message: "post updated." })
  } catch (error) {
    res.status(500).json({ message: "could not update post." })
  }
}

async function deleteOne(req: Request<{ id: string }>, res: Response) {
  try {
    const id = parseInt(req.params.id)
    await deletePost(id)
    res.status(200).json({ message: `Deleted post: ${id}` })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error when deleting post." })
  }
}

export { getAll, create, edit, deleteOne }