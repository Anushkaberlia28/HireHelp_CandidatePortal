import { db } from '../../database/connection';
import { applications, interviewStatus, notifications } from '../../database/schema';
import { eq, and, desc, count, sql } from 'drizzle-orm';

export class DashboardRepository {
  async getStats(candidateId: number) {
    const totalApps = await db.select({ count: count() })
      .from(applications)
      .where(eq(applications.candidateId, candidateId));
    
    const activeApps = await db.select({ count: count() })
      .from(applications)
      .where(and(
        eq(applications.candidateId, candidateId),
        sql`${applications.status} = 'applied' OR ${applications.status} = 'screening' OR ${applications.status} = 'interview'`
      ));
    
    const interviews = await db.select({ count: count() })
      .from(interviewStatus)
      .where(and(
        eq(interviewStatus.candidateId, candidateId),
        eq(interviewStatus.status, 'scheduled')
      ));
    
    const offers = await db.select({ count: count() })
      .from(applications)
      .where(and(
        eq(applications.candidateId, candidateId),
        eq(applications.status, 'offer')
      ));

    return {
      totalApplications: totalApps[0]?.count || 0,
      activeApplications: activeApps[0]?.count || 0,
      interviewsScheduled: interviews[0]?.count || 0,
      offersReceived: offers[0]?.count || 0,
    };
  }

  async getRecentApplications(candidateId: number, limit = 5) {
    return await db.select()
      .from(applications)
      .where(eq(applications.candidateId, candidateId))
      .orderBy(desc(applications.appliedAt))
      .limit(limit);
  }

  async getUpcomingInterviews(candidateId: number, limit = 5) {
    return await db.select()
      .from(interviewStatus)
      .where(and(
        eq(interviewStatus.candidateId, candidateId),
        eq(interviewStatus.status, 'scheduled'),
        sql`${interviewStatus.scheduledAt} >= NOW()`
      ))
      .orderBy(interviewStatus.scheduledAt)
      .limit(limit);
  }

  async getUnreadNotifications(candidateId: number, limit = 5) {
    return await db.select()
      .from(notifications)
      .where(and(
        eq(notifications.candidateId, candidateId),
        eq(notifications.isRead, false)
      ))
      .orderBy(desc(notifications.createdAt))
      .limit(limit);
  }
}

export const dashboardRepository = new DashboardRepository();
