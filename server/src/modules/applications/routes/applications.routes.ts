import { Router } from 'express';
import { applicationsController } from '../applications.controller';
import { authenticate } from '../../../common/middleware/auth';
import { validate } from '../../../common/middleware/validate';
import { applyJobSchema } from '../applications.schema';

const router = Router();

router.get('/', authenticate, applicationsController.list);
router.get('/:id', authenticate, applicationsController.getById);
router.post('/', authenticate, validate(applyJobSchema), applicationsController.apply);

export default router;
