import { Router } from 'express';
import authRouter from './modules/auth/routes/auth.routes';
import jobsRouter from './modules/jobs/routes/jobs.routes';
import interviewStatusRouter from './modules/interview-status/routes/interview-status.routes';
import applicationsRouter from './modules/applications/routes/applications.routes';
import notificationsRouter from './modules/notifications/routes/notifications.routes';
import profileRouter from './modules/profile/routes/profile.routes';
import resumeRouter from './modules/resume/routes/resume.routes';
import dashboardRouter from './modules/dashboard/routes/dashboard.routes';

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
