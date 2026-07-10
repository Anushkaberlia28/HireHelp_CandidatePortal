import { db } from '../../database/connection';
import { applications } from '../../database/schema';
import { eq, and, desc } from 'drizzle-orm';
import { NewApplication } from '../../database/schema';

export class ApplicationsRepository {
  async findByCandidateId(candidateId: number) {
    return await db.select().from(applications)
      .where(eq(applications.candidateId, candidateId))
      .orderBy(desc(applications.appliedAt));
  }

  async findById(id: number) {
    const result = await db.select().from(applications).where(eq(applications.id, id)).limit(1);
    return result[0];
  }

  async create(data: NewApplication) {
    const result = await db.insert(applications).values({
      ...data,
      appliedAt: new Date(),
      updatedAt: new Date(),
    }).returning();
    return result[0];
  }

  async updateStatus(id: number, candidateId: number, status: string) {
    const result = await db.update(applications)
      .set({ status, updatedAt: new Date() })
      .where(and(eq(applications.id, id), eq(applications.candidateId, candidateId)))
      .returning();
    return result[0];
  }
}

export const applicationsRepository = new ApplicationsRepository();
