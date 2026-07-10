import { db } from '../../../database/connection';
import { applications } from '../../../database/schema';
import { eq } from 'drizzle-orm';

export const handleOfferGenerated = async (data: {
  applicationId: number;
  candidateId: number;
  offerDetails?: any;
}) => {
  try {
    await db
      .update(applications)
      .set({ 
        status: 'offer',
        updatedAt: new Date(),
      })
      .where(eq(applications.id, data.applicationId));
    
    console.log(`Updated application ${data.applicationId} to offer status`);
  } catch (error) {
    console.error('Error handling OfferGenerated event:', error);
  }
};
