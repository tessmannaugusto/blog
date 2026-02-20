import express from "express";
import { validate } from "../middleware/validate.js";
import { createContactSchema } from "../schemas/contact.schema.js";
import { getAll, create } from "../controllers/contact.controller.js";


const router = express.Router();

router.get('/', getAll)
router.post('/', validate(createContactSchema, "body"), create)

export default router;