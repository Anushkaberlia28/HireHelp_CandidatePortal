import { db } from '../../../database/connection';
import { applications } from '../../../database/schema';
import { eq } from 'drizzle-orm';

export const handleFitmentScoreCalculated = async (data: {
  applicationId: number;
  fitmentScore: number;
  details?: any;
}) => {
  try {
    await db
      .update(applications)
      .set({ 
        fitmentScore: data.fitmentScore,
        updatedAt: new Date(),
      })
      .where(eq(applications.id, data.applicationId));
    
    console.log(`Updated fitment score for application ${data.applicationId}`);
  } catch (error) {
    console.error('Error handling FitmentScoreCalculated event:', error);
  }
};
