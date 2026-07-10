import { Router } from 'express';
import { notificationsController } from '../notifications.controller.js';
import { authenticate } from '../../../common/middleware/auth.js';
import { validate } from '../../../common/middleware/validate.js';
import { markAsReadSchema } from '../notifications.schema.js';

const router = Router();

router.get('/', authenticate, notificationsController.list);
router.get('/unread-count', authenticate, notificationsController.getUnreadCount);
router.post('/mark-read', authenticate, validate(markAsReadSchema), notificationsController.markAsRead);
router.post('/mark-all-read', authenticate, notificationsController.markAllAsRead);

export default router;
