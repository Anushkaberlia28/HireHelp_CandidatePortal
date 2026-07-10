const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'http://localhost:3000';

export const aiEvaluationClient = {
  async getFitmentScore(applicationId: number) {
    const response = await fetch(`${API_GATEWAY_URL}/ai-evaluation/fitment/${applicationId}`);
    if (!response.ok) throw new Error('Failed to fetch fitment score');
    return response.json();
  },
};
