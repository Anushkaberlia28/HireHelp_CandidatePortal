import api from "./api";
import type { Resume, ResumeAnalytics } from "@/types";

export async function getResume(): Promise<Resume> {
    const response = await api.get<Resume>("/resume");
    return response.data;
}

export async function uploadResume(fileName: string): Promise<Resume> {
    const response = await api.post<Resume>("/resume/upload", { fileName });
    return response.data;
}

export async function getResumeAnalytics(): Promise<ResumeAnalytics> {
    const response = await api.get<ResumeAnalytics>("/resume/analytics");
    return response.data;
}
