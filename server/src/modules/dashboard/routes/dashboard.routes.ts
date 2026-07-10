import { Router } from "express";
import { authenticate } from "../../../middleware/auth.middleware.js";
import { getDashboardData } from "../services/dashboard.service.js";

const router = Router();

router.use(authenticate);

router.get("/", async (req, res) => {
  try {
    const data = await getDashboardData(req.userId!);
    res.json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch dashboard data" });
  }
});

export default router;
