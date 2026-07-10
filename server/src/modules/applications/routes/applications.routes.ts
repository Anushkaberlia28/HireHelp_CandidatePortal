import { Router } from 'express';
import { applicationsController } from '../applications.controller.js';
import { authenticate } from '../../../common/middleware/auth.js';
import { validate } from '../../../common/middleware/validate.js';
import { applyJobSchema } from '../applications.schema.js';

const router = Router();

router.get('/', authenticate, applicationsController.list);
router.get('/:id', authenticate, applicationsController.getById);
router.post('/', authenticate, validate(applyJobSchema), applicationsController.apply);

export default router;
