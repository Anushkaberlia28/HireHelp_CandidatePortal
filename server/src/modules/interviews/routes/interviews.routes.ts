import { Router } from "express";
import { authenticate } from "../../../middleware/auth.middleware.js";
import {
  getInterviewStats,
  getInterviewsByUserId,
} from "../services/interviews.service.js";

const router = Router();

router.use(authenticate);

router.get("/stats", async (req, res) => {
  try {
    const stats = await getInterviewStats(req.userId!);
    res.json(stats);
  } catch {
    res.status(500).json({ message: "Failed to fetch interview stats" });
  }
});

router.get("/", async (req, res) => {
  try {
    const interviews = await getInterviewsByUserId(req.userId!);
    res.json(interviews);
  } catch {
    res.status(500).json({ message: "Failed to fetch interviews" });
  }
});

export default router;
