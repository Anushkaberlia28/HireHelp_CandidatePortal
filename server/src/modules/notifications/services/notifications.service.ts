import { randomUUID } from "crypto";
import type { Notification } from "../../../types/index.js";
import { userNotifications } from "../../../data/seed.js";

export async function getNotificationsByUserId(userId: string) {
  return userNotifications.get(userId) ?? [];
}

export async function getNotificationStats(userId: string) {
  const notifications = userNotifications.get(userId) ?? [];
  const unread = notifications.filter((n) => n.unread);

  return {
    total: notifications.length,
    unread: unread.length,
    interviews: notifications.filter((n) => n.type === "interview").length,
    applications: notifications.filter((n) => n.type === "job").length,
  };
}

export async function markAllRead(userId: string) {
  const notifications = userNotifications.get(userId) ?? [];
  notifications.forEach((n) => {
    n.unread = false;
  });
  userNotifications.set(userId, notifications);
  return notifications;
}

export async function markAsRead(userId: string, id: string) {
  const notifications = userNotifications.get(userId) ?? [];
  const notification = notifications.find((n) => n.id === id);
  if (!notification) {
    return null;
  }

  notification.unread = false;
  return notification;
}

export function addNotification(userId: string, data: Omit<Notification, "id" | "userId">) {
  const notifications = userNotifications.get(userId) ?? [];
  const notification: Notification = {
    id: randomUUID(),
    userId,
    ...data,
  };
  notifications.unshift(notification);
  userNotifications.set(userId, notifications);
  return notification;
}
