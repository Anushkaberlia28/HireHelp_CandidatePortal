import { randomUUID } from "crypto";
import { Job } from "../../../types/index.js";

const jobs: Job[] = [
  {
    id: "1",
    company: "Google",
    role: "Frontend Developer",
    location: "Mountain View, CA",
    type: "Full-time",
    description: "Build modern web applications",
    salary: "$120,000 - $180,000",
    postedDate: new Date(),
  },
  {
    id: "2",
    company: "Meta",
    role: "React Developer",
    location: "Menlo Park, CA",
    type: "Full-time",
    description: "Work on React-based products",
    salary: "$130,000 - $190,000",
    postedDate: new Date(),
  },
  {
    id: "3",
    company: "Amazon",
    role: "Software Engineer",
    location: "Seattle, WA",
    type: "Full-time",
    description: "Build scalable systems",
    salary: "$110,000 - $160,000",
    postedDate: new Date(),
  },
  {
    id: "4",
    company: "Microsoft",
    role: "TypeScript Developer",
    location: "Redmond, WA",
    type: "Full-time",
    description: "Develop TypeScript applications",
    salary: "$125,000 - $175,000",
    postedDate: new Date(),
  },
  {
    id: "5",
    company: "Apple",
    role: "iOS Developer",
    location: "Cupertino, CA",
    type: "Full-time",
    description: "Build iOS applications",
    salary: "$140,000 - $200,000",
    postedDate: new Date(),
  },
];

export async function getAllJobs() {
  return jobs;
}

export async function getJobById(id: string) {
  return jobs.find((job) => job.id === id) || null;
}

export async function searchJobs(query: string) {
  const lowerQuery = query.toLowerCase();
  return jobs.filter(
    (job) =>
      job.role.toLowerCase().includes(lowerQuery) ||
      job.company.toLowerCase().includes(lowerQuery) ||
      job.location.toLowerCase().includes(lowerQuery)
  );
}
