import { Router } from 'express';
import { authController } from '../auth.controller.js';
import { authenticate } from '../../../common/middleware/auth.js';
import { validate } from '../../../common/middleware/validate.js';
import { registerSchema, loginSchema } from '../auth.schema.js';

const router = Router();

router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.get('/me', authenticate, authController.me);

export default router;
