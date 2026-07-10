import { randomUUID } from "crypto";
import type {
  Application,
  Interview,
  Notification,
  Profile,
  Resume,
} from "../types/index.js";

export const userProfiles = new Map<string, Profile>();
export const userApplications = new Map<string, Application[]>();
export const userInterviews = new Map<string, Interview[]>();
export const userNotifications = new Map<string, Notification[]>();
export const userResumes = new Map<string, Resume>();

export function seedUserData(userId: string, fullName: string, email: string) {
  userProfiles.set(userId, {
    id: randomUUID(),
    userId,
    fullName,
    email,
    phone: "+91 9876543210",
    location: "Jaipur, Rajasthan",
    headline: "Frontend Developer",
    summary: "Passionate developer building modern web applications.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux",
      "Git",
    ],
    education: [
      {
        id: randomUUID(),
        school: "JECRC University",
        degree: "B.Tech",
        field: "Computer Science",
        startDate: "2022",
        endDate: "2026",
      },
    ],
    experience: [
      {
        id: randomUUID(),
        company: "HireHelp",
        role: "Frontend Intern",
        startDate: "Jan 2026",
        endDate: "Present",
        description: "Building the candidate portal UI.",
      },
    ],
  });

  userApplications.set(userId, [
    {
      id: randomUUID(),
      userId,
      jobId: "1",
      company: "Google",
      role: "Frontend Developer",
      location: "Mountain View, CA",
      appliedDate: "2026-07-08",
      status: "Interview",
    },
    {
      id: randomUUID(),
      userId,
      jobId: "2",
      company: "Meta",
      role: "React Developer",
      location: "Menlo Park, CA",
      appliedDate: "2026-07-05",
      status: "Applied",
    },
    {
      id: randomUUID(),
      userId,
      jobId: "3",
      company: "Amazon",
      role: "Software Engineer",
      location: "Seattle, WA",
      appliedDate: "2026-07-01",
      status: "Rejected",
    },
    {
      id: randomUUID(),
      userId,
      jobId: "4",
      company: "Netflix",
      role: "Frontend Engineer",
      location: "Remote",
      appliedDate: "2026-07-10",
      status: "Offer",
    },
  ]);

  userInterviews.set(userId, [
    {
      id: randomUUID(),
      userId,
      company: "Google",
      role: "Frontend Developer",
      interviewer: "Sarah Johnson",
      date: "2026-07-11",
      time: "10:30 AM",
      meetingLink: "https://meet.google.com/",
      status: "Scheduled",
    },
    {
      id: randomUUID(),
      userId,
      company: "Microsoft",
      role: "Software Engineer",
      interviewer: "David Lee",
      date: "2026-07-13",
      time: "2:00 PM",
      meetingLink: "https://teams.microsoft.com/",
      status: "Scheduled",
    },
    {
      id: randomUUID(),
      userId,
      company: "Meta",
      role: "React Developer",
      interviewer: "Jane Smith",
      date: "2026-06-28",
      time: "11:00 AM",
      meetingLink: "https://meet.google.com/",
      status: "Completed",
    },
  ]);

  userNotifications.set(userId, [
    {
      id: randomUUID(),
      userId,
      title: "Interview Scheduled",
      message: "Google scheduled your interview for tomorrow.",
      time: "5 mins ago",
      type: "interview",
      unread: true,
    },
    {
      id: randomUUID(),
      userId,
      title: "Application Viewed",
      message: "Amazon recruiter viewed your application.",
      time: "2 hours ago",
      type: "job",
      unread: true,
    },
    {
      id: randomUUID(),
      userId,
      title: "Profile Updated",
      message: "Your profile was updated successfully.",
      time: "Yesterday",
      type: "profile",
      unread: false,
    },
    {
      id: randomUUID(),
      userId,
      title: "New Job Match",
      message: "3 new jobs match your profile.",
      time: "Yesterday",
      type: "job",
      unread: true,
    },
  ]);

  userResumes.set(userId, {
    id: randomUUID(),
    userId,
    fileName: "Resume.pdf",
    fileUrl: "/uploads/resume.pdf",
    uploadedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    score: 91,
  });
}
