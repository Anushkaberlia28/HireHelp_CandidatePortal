import { Router } from 'express';
import { dashboardController } from '../dashboard.controller.js';
import { authenticate } from '../../../common/middleware/auth.js';

const router = Router();

router.get('/stats', authenticate, dashboardController.getStats);
router.get('/overview', authenticate, dashboardController.getOverview);

export default router;
