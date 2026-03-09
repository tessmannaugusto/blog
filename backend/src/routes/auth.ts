import { Router } from 'express'
import { validate } from '../middleware/validate.js';
import { loginSchema } from '../schemas/auth.schema.js';
import { login } from '../controllers/login.controller.js';
import { authenticate } from '../middleware/authenticate.js';
import limiterMinute from '../middleware/rateLimiter.js';

const router = Router();

router.get('/verify', limiterMinute(10), authenticate, (req, res) => {
  res.json({valid: true})
})
router.post('', limiterMinute(5), validate(loginSchema, "body"), login)

export default router;