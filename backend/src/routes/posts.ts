import { Router } from "express";
import { getAll, create, deleteOne, edit, getOneBySlug } from "../controllers/posts.controller.js";
import { validate } from "../middleware/validate.js";
import { createPostSchema, deletePostSchema, getPostBySlugSchema, postSchema } from "../schemas/post.schema.js";
import { authenticate } from "../middleware/authenticate.js";
import limiterMinute from "../middleware/rateLimiter.js";

const router = Router();

router.get('/', limiterMinute(100), getAll);
router.post('/', limiterMinute(5), authenticate, validate(createPostSchema, "body"), create)
router.patch('/', limiterMinute(5), authenticate, validate(postSchema, "body"), edit)
router.delete('/:id',limiterMinute(100), authenticate, validate(deletePostSchema, "params"), deleteOne)
router.get('/:slug', limiterMinute(100), validate(getPostBySlugSchema, "params"), getOneBySlug)

export default router;