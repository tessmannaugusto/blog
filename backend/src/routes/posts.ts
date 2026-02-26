import { Router } from "express";
import { getAll, create, deleteOne, edit, getOneBySlug } from "../controllers/posts.controller.js";
import { validate } from "../middleware/validate.js";
import { createPostSchema, deletePostSchema, getPostBySlugSchema, postSchema } from "../schemas/post.schema.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.get('/', getAll);
router.post('/', authenticate, validate(createPostSchema, "body"), create)
router.patch('/', authenticate, validate(postSchema, "body"), edit)
router.delete('/:id', authenticate, validate(deletePostSchema, "params"), deleteOne)
router.get('/:slug', validate(getPostBySlugSchema, "params"), getOneBySlug)

export default router;