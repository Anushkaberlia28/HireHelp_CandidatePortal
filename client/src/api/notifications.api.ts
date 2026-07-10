import api from "./api";
import type { Notification, NotificationStats } from "@/types";

export async function getNotifications(): Promise<Notification[]> {
    const response = await api.get<Notification[]>("/notifications");
    return response.data;
}

export async function getNotificationStats(): Promise<NotificationStats> {
    const response = await api.get<NotificationStats>("/notifications/stats");
    return response.data;
}

export async function markAllNotificationsRead(): Promise<Notification[]> {
    const response = await api.patch<Notification[]>("/notifications/read-all");
    return response.data;
}
