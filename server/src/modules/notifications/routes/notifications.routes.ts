import { Router } from 'express';
import { notificationsController } from '../notifications.controller';
import { authenticate } from '../../../common/middleware/auth';
import { validate } from '../../../common/middleware/validate';
import { markAsReadSchema } from '../notifications.schema';

const router = Router();

router.get('/', authenticate, notificationsController.list);
router.get('/unread-count', authenticate, notificationsController.getUnreadCount);
router.post('/mark-read', authenticate, validate(markAsReadSchema), notificationsController.markAsRead);
router.post('/mark-all-read', authenticate, notificationsController.markAllAsRead);

export default router;
