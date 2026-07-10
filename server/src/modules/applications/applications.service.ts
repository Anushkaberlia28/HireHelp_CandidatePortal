import { applicationsRepository } from './applications.repository';
import { ApplyJobInput } from './applications.schema';

export class ApplicationsService {
  async list(candidateId: number) {
    return await applicationsRepository.findByCandidateId(candidateId);
  }

  async getById(id: number, candidateId: number) {
    const application = await applicationsRepository.findById(id);
    if (!application || application.candidateId !== candidateId) {
      throw new Error('Application not found');
    }
    return application;
  }

  async apply(candidateId: number, data: ApplyJobInput) {
    return await applicationsRepository.create({
      candidateId,
      jobId: data.jobId,
      coverLetter: data.coverLetter,
      status: 'applied',
    });
  }
}

export const applicationsService = new ApplicationsService();
