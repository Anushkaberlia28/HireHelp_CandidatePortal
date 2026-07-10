const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'http://localhost:3000';

export const recruitmentClient = {
  async getJob(jobId: string) {
    const response = await fetch(`${API_GATEWAY_URL}/recruitment/jobs/${jobId}`);
    if (!response.ok) throw new Error('Failed to fetch job');
    return response.json();
  },

  async listJobs(filters?: Record<string, any>) {
    const queryParams = new URLSearchParams(filters as any).toString();
    const response = await fetch(`${API_GATEWAY_URL}/recruitment/jobs?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch jobs');
    return response.json();
  },
};
