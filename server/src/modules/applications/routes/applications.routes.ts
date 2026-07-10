import { Router } from "express";
import { authenticate } from "../../../middleware/auth.middleware.js";
import {
  createApplication,
  getApplicationsByUserId,
} from "../services/applications.service.js";

const router = Router();

router.use(authenticate);

router.get("/", async (req, res) => {
  try {
    const applications = await getApplicationsByUserId(req.userId!);
    res.json(applications);
  } catch {
    res.status(500).json({ message: "Failed to fetch applications" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { jobId } = req.body;
    if (!jobId) {
      return res.status(400).json({ message: "jobId is required." });
    }

    const application = await createApplication(req.userId!, jobId);
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Failed to apply",
    });
  }
});

export default router;
