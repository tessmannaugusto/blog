import { Router } from "express";
import { validate } from "../middleware/validate.js";
import { createContactSchema, getContactSchema } from "../schemas/contact.schema.js";
import { getAll, create, getOne } from "../controllers/contact.controller.js";
import { authenticate } from "../middleware/authenticate.js";


const router = Router();

router.get('/', authenticate, getAll)
router.post('/', validate(createContactSchema, "body"), create)
router.get('/:id', authenticate, validate(getContactSchema, "params"), getOne)

export default router;