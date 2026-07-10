import { Router } from 'express';
import { resumeController } from '../resume.controller';
import { authenticate } from '../../../common/middleware/auth';

const router = Router();

router.post('/upload', authenticate, resumeController.upload);
router.get('/', authenticate, resumeController.list);
router.delete('/:id', authenticate, resumeController.delete);

export default router;
