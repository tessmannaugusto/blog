import { Router } from 'express'
import { validate } from '../middleware/validate.js';
import { loginSchema } from '../schemas/auth.schema.js';
import { login } from '../controllers/login.controller.js';

const router = Router();

router.post('', validate(loginSchema, "body"), login)

export default router;