import { Router } from "express";
import { validate } from "../middleware/validate.js";
import { createContactSchema, deleteContactSchema, getContactSchema } from "../schemas/contact.schema.js";
import { getAll, create, getOne, deleteOne } from "../controllers/contact.controller.js";
import { authenticate } from "../middleware/authenticate.js";
import limiterMinute from "../middleware/rateLimiter.js";


const router = Router();

router.get('/', limiterMinute(5), authenticate, getAll)
router.post('/', limiterMinute(5), validate(createContactSchema, "body"), create)
router.get('/:id', limiterMinute(10), authenticate, validate(getContactSchema, "params"), getOne)
router.delete('/:id', limiterMinute(10), authenticate, validate(deleteContactSchema, "params"), deleteOne)

export default router;