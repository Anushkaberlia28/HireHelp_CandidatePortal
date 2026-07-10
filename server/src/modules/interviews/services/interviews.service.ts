import { userInterviews } from "../../../data/seed.js";

export async function getInterviewsByUserId(userId: string) {
  return userInterviews.get(userId) ?? [];
}

export async function getInterviewStats(userId: string) {
  const interviews = userInterviews.get(userId) ?? [];

  return {
    scheduled: interviews.filter((i) => i.status === "Scheduled").length,
    completed: interviews.filter((i) => i.status === "Completed").length,
    offers: 2,
  };
}
