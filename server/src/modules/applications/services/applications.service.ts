import { randomUUID } from "crypto";
import { Application } from "../../../types/index.js";

const applications: Application[] = [
  {
    id: "1",
    userId: "user-1",
    jobId: "1",
    company: "Google",
    role: "Frontend Developer",
    location: "Mountain View, CA",
    appliedDate: "2024-01-15",
    status: "Interview",
  },
  {
    id: "2",
    userId: "user-1",
    jobId: "2",
    company: "Meta",
    role: "React Developer",
    location: "Menlo Park, CA",
    appliedDate: "2024-01-20",
    status: "Applied",
  },
  {
    id: "3",
    userId: "user-1",
    jobId: "3",
    company: "Amazon",
    role: "Software Engineer",
    location: "Seattle, WA",
    appliedDate: "2024-01-25",
    status: "Rejected",
  },
];

export async function getApplicationsByUserId(userId: string) {
  return applications.filter((app) => app.userId === userId);
}

export async function getApplicationById(id: string) {
  return applications.find((app) => app.id === id) || null;
}

export async function createApplication(data: Omit<Application, "id">) {
  const application: Application = {
    id: randomUUID(),
    ...data,
  };
  applications.push(application);
  return application;
}

export async function updateApplicationStatus(id: string, status: Application["status"]) {
  const application = applications.find((app) => app.id === id);
  if (application) {
    application.status = status;
    return application;
  }
  return null;
}

export async function deleteApplication(id: string) {
  const index = applications.findIndex((app) => app.id === id);
  if (index !== -1) {
    applications.splice(index, 1);
    return true;
  }
  return false;
}
