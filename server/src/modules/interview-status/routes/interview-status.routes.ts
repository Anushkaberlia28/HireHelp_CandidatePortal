import { Router } from 'express';
import { interviewStatusController } from '../interview-status.controller';
import { authenticate } from '../../../common/middleware/auth';
import { validate } from '../../../common/middleware/validate';
import { updateInterviewStatusSchema } from '../interview-status.schema';

const router = Router();

router.get('/', authenticate, interviewStatusController.list);
router.get('/:id', authenticate, interviewStatusController.getById);
router.put('/:id', authenticate, validate(updateInterviewStatusSchema), interviewStatusController.update);

export default router;
