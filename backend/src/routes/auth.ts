import { Router } from 'express'
import { validate } from '../middleware/validate.js';
import { loginSchema } from '../schemas/login.schema.js';
import { login } from '../controllers/login.controller.js';

const router = Router();

router.post('/login', validate(loginSchema, "body"), login)