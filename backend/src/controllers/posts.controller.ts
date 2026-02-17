import { Request, Response } from "express";
import { getAllPosts, createPost, deletePost } from "../services/posts.js";

async function getAll(req: Request, res: Response) {
  const posts = await getAllPosts();
  return res.json(posts);
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