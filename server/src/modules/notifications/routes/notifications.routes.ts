import { Router } from "express";
import { authenticate } from "../../../middleware/auth.middleware.js";
import {
  getNotificationStats,
  getNotificationsByUserId,
  markAllRead,
  markAsRead,
} from "../services/notifications.service.js";

const router = Router();

router.use(authenticate);

router.get("/stats", async (req, res) => {
  try {
    const stats = await getNotificationStats(req.userId!);
    res.json(stats);
  } catch {
    res.status(500).json({ message: "Failed to fetch notification stats" });
  }
});

router.patch("/read-all", async (req, res) => {
  try {
    const notifications = await markAllRead(req.userId!);
    res.json(notifications);
  } catch {
    res.status(500).json({ message: "Failed to mark notifications as read" });
  }
});

router.patch("/:id/read", async (req, res) => {
  try {
    const notification = await markAsRead(req.userId!, req.params.id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }
    res.json(notification);
  } catch {
    res.status(500).json({ message: "Failed to mark notification as read" });
  }
});

router.get("/", async (req, res) => {
  try {
    const notifications = await getNotificationsByUserId(req.userId!);
    res.json(notifications);
  } catch {
    res.status(500).json({ message: "Failed to fetch notifications" });
  }
});

export default router;
