import api from "./api";
import type { Interview, InterviewStats } from "@/types";

export async function getInterviews(): Promise<Interview[]> {
    const response = await api.get<Interview[]>("/interviews");
    return response.data;
}

export async function getInterviewStats(): Promise<InterviewStats> {
    const response = await api.get<InterviewStats>("/interviews/stats");
    return response.data;
}
