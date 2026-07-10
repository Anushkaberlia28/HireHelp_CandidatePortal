import { Router } from 'express';
import { interviewStatusController } from '../interview-status.controller.js';
import { authenticate } from '../../../common/middleware/auth.js';
import { validate } from '../../../common/middleware/validate.js';
import { updateInterviewStatusSchema } from '../interview-status.schema.js';

const router = Router();

router.get('/', authenticate, interviewStatusController.list);
router.get('/:id', authenticate, interviewStatusController.getById);
router.put('/:id', authenticate, validate(updateInterviewStatusSchema), interviewStatusController.update);

export default router;
