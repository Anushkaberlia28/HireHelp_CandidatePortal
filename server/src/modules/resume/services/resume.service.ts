import { randomUUID } from "crypto";
import type { Resume } from "../../../types/index.js";
import { userResumes } from "../../../data/seed.js";

export async function getResume(userId: string) {
  return userResumes.get(userId) ?? null;
}

export async function uploadResume(userId: string, fileName: string) {
  const resume: Resume = {
    id: randomUUID(),
    userId,
    fileName,
    fileUrl: `/uploads/${fileName}`,
    uploadedAt: new Date(),
    score: Math.floor(Math.random() * 15) + 80,
  };

  userResumes.set(userId, resume);
  return resume;
}

export async function getResumeAnalytics(userId: string) {
  const resume = userResumes.get(userId);
  if (!resume) {
    return null;
  }

  return {
    score: resume.score ?? 0,
    keywordsMatched: 24,
    keywordsMissing: 6,
    sections: [
      { name: "Contact Info", score: 100 },
      { name: "Experience", score: 92 },
      { name: "Education", score: 88 },
      { name: "Skills", score: 95 },
    ],
    suggestions: [
      "Add more quantifiable achievements",
      "Include relevant keywords from job descriptions",
      "Keep formatting consistent throughout",
    ],
  };
}
