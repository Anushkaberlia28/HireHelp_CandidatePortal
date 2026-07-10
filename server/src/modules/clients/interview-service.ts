const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'http://localhost:3000';

export const interviewClient = {
  async getInterviewDetails(interviewId: string) {
    const response = await fetch(`${API_GATEWAY_URL}/interview/interviews/${interviewId}`);
    if (!response.ok) throw new Error('Failed to fetch interview details');
    return response.json();
  },

  async updateInterviewStatus(interviewId: string, status: string) {
    const response = await fetch(`${API_GATEWAY_URL}/interview/interviews/${interviewId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error('Failed to update interview status');
    return response.json();
  },
};
