import { Router } from "express";
import { validate } from "../middleware/validate.js";
import { createContactSchema, getContactSchema } from "../schemas/contact.schema.js";
import { getAll, create, getOne } from "../controllers/contact.controller.js";
import { authenticate } from "../middleware/authenticate.js";
import limiterMinute from "../middleware/rateLimiter.js";


const router = Router();

router.get('/', limiterMinute(5), authenticate, getAll)
router.post('/', limiterMinute(5), validate(createContactSchema, "body"), create)
router.get('/:id',limiterMinute(10), authenticate, validate(getContactSchema, "params"), getOne)

export default router;