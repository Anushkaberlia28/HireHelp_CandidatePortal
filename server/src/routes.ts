import { Router } from 'express';
import authRouter from './modules/auth/routes/auth.routes.js';
import jobsRouter from './modules/jobs/routes/jobs.routes.js';
import interviewStatusRouter from './modules/interview-status/routes/interview-status.routes.js';
import applicationsRouter from './modules/applications/routes/applications.routes.js';
import notificationsRouter from './modules/notifications/routes/notifications.routes.js';
import profileRouter from './modules/profile/routes/profile.routes.js';
import resumeRouter from './modules/resume/routes/resume.routes.js';
import dashboardRouter from './modules/dashboard/routes/dashboard.routes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/jobs', jobsRouter);
router.use('/interview-status', interviewStatusRouter);
router.use('/applications', applicationsRouter);
router.use('/notifications', notificationsRouter);
router.use('/profile', profileRouter);
router.use('/resume', resumeRouter);
router.use('/dashboard', dashboardRouter);

export default router;
