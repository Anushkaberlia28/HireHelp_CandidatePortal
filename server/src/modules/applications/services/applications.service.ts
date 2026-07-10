import { randomUUID } from "crypto";
import type { Application } from "../../../types/index.js";
import { userApplications } from "../../../data/seed.js";
import { getJobById } from "../../jobs/services/jobs.service.js";

export async function getApplicationsByUserId(userId: string) {
  return userApplications.get(userId) ?? [];
}

export async function getApplicationById(userId: string, id: string) {
  const applications = userApplications.get(userId) ?? [];
  return applications.find((app) => app.id === id) ?? null;
}

export async function createApplication(userId: string, jobId: string) {
  const job = await getJobById(jobId);
  if (!job) {
    throw new Error("Job not found.");
  }

  const applications = userApplications.get(userId) ?? [];
  const existing = applications.find((app) => app.jobId === jobId);
  if (existing) {
    throw new Error("You have already applied to this job.");
  }

  const application: Application = {
    id: randomUUID(),
    userId,
    jobId,
    company: job.company,
    role: job.role,
    location: job.location,
    appliedDate: new Date().toISOString().split("T")[0],
    status: "Applied",
  };

  applications.push(application);
  userApplications.set(userId, applications);
  return application;
}

export async function updateApplicationStatus(
  userId: string,
  id: string,
  status: Application["status"]
) {
  const applications = userApplications.get(userId) ?? [];
  const application = applications.find((app) => app.id === id);
  if (!application) {
    return null;
  }

  application.status = status;
  return application;
}
