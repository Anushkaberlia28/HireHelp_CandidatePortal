export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  createdAt?: Date;
}

export interface AuthResponse {
  user: {
    id: string;
    fullName: string;
    email: string;
  };
  accessToken: string;
}

export interface Job {
  id: string;
  company: string;
  role: string;
  location: string;
  type: string;
  description?: string;
  salary?: string;
  postedDate: Date;
}

export interface Application {
  id: string;
  userId: string;
  jobId: string;
  company: string;
  role: string;
  location: string;
  appliedDate: string;
  status: "Applied" | "Interview" | "Rejected" | "Offer";
}

export interface Interview {
  id: string;
  userId: string;
  company: string;
  role: string;
  interviewer: string;
  date: string;
  time: string;
  meetingLink: string;
  status: "Scheduled" | "Completed" | "Cancelled";
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  time: string;
  type: "job" | "interview" | "profile";
  unread: boolean;
}

export interface Profile {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  headline?: string;
  summary?: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Resume {
  id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: Date;
  score?: number;
}

export interface DashboardStats {
  totalApplications: number;
  interviewsScheduled: number;
  jobsApplied: number;
  unreadNotifications: number;
}
