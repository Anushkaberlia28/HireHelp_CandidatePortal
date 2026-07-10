import { Router } from 'express';
import { dashboardController } from '../dashboard.controller';
import { authenticate } from '../../../common/middleware/auth';

const router = Router();

router.get('/stats', authenticate, dashboardController.getStats);
router.get('/overview', authenticate, dashboardController.getOverview);

export default router;
