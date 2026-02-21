import { Router } from "express";
import { getAll, create, deleteOne } from "../controllers/posts.controller.js";
import { validate } from "../middleware/validate.js";
import { createPostSchema, deletePostSchema } from "../schemas/post.schema.js";

const router = Router();

router.get('/', getAll);
router.post('/', validate(createPostSchema, "body"), create)
// router.patch('/', editPost)
router.delete('/:id', validate(deletePostSchema, "params"), deleteOne)

export default router;