import { getAllJobs } from "../../jobs/services/jobs.service.js";
import { getApplicationsByUserId } from "../../applications/services/applications.service.js";
import { getInterviewsByUserId } from "../../interviews/services/interviews.service.js";
import { getNotificationsByUserId } from "../../notifications/services/notifications.service.js";
import { getProfile, getProfileCompletion } from "../../profile/services/profile.service.js";
import { getResume } from "../../resume/services/resume.service.js";

function formatInterviewDate(date: string, time: string) {
  const parsed = new Date(date);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  let dayLabel = parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  if (isSameDay(parsed, today)) {
    dayLabel = "Today";
  } else if (isSameDay(parsed, tomorrow)) {
    dayLabel = "Tomorrow";
  }

  return `${dayLabel} • ${time}`;
}

export async function getDashboardData(userId: string) {
  const [applications, interviews, notifications, profile, resume, jobs] =
    await Promise.all([
      getApplicationsByUserId(userId),
      getInterviewsByUserId(userId),
      getNotificationsByUserId(userId),
      getProfile(userId),
      getResume(userId),
      getAllJobs(),
    ]);

  const upcomingInterview =
    interviews.find((i) => i.status === "Scheduled") ?? null;

  const unreadNotifications = notifications.filter((n) => n.unread);

  return {
    stats: {
      totalApplications: applications.length,
      resumeScore: resume?.score ?? 0,
      interviewsScheduled: interviews.filter((i) => i.status === "Scheduled")
        .length,
      unreadNotifications: unreadNotifications.length,
    },
    profileCompletion: profile ? getProfileCompletion(profile) : 0,
    upcomingInterview: upcomingInterview
      ? {
          ...upcomingInterview,
          formattedDate: formatInterviewDate(
            upcomingInterview.date,
            upcomingInterview.time
          ),
        }
      : null,
    resumeStatus: {
      uploaded: Boolean(resume),
      score: resume?.score ?? 0,
      fileName: resume?.fileName ?? null,
      lastUpdated: resume?.uploadedAt ?? null,
    },
    recentApplications: applications.slice(0, 5),
    recommendedJobs: jobs.slice(0, 3).map((job) => ({
      id: job.id,
      title: job.role,
      company: job.company,
    })),
    activityTimeline: [
      resume ? "Resume uploaded" : "Upload your resume",
      ...applications.slice(0, 2).map((app) => `Applied at ${app.company}`),
      upcomingInterview ? "Interview scheduled" : "No upcoming interviews",
      profile ? "Profile updated" : "Complete your profile",
    ],
    notifications: notifications.slice(0, 5).map((n) => n.message),
  };
}
