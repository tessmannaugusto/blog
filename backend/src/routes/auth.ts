import { Router } from 'express'
import { validate } from '../middleware/validate.js';
import { loginSchema } from '../schemas/auth.schema.js';
import { login } from '../controllers/login.controller.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.get('/verify', authenticate, (req, res) => {
  res.json({valid: true})
})
router.post('', validate(loginSchema, "body"), login)

export default router;