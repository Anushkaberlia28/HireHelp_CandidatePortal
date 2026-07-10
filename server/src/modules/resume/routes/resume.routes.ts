import { Router } from "express";
import { authenticate } from "../../../middleware/auth.middleware.js";
import {
  getResume,
  getResumeAnalytics,
  uploadResume,
} from "../services/resume.service.js";

const router = Router();

router.use(authenticate);

router.get("/analytics", async (req, res) => {
  try {
    const analytics = await getResumeAnalytics(req.userId!);
    if (!analytics) {
      return res.status(404).json({ message: "No resume uploaded yet." });
    }
    res.json(analytics);
  } catch {
    res.status(500).json({ message: "Failed to fetch resume analytics" });
  }
});

router.get("/", async (req, res) => {
  try {
    const resume = await getResume(req.userId!);
    if (!resume) {
      return res.status(404).json({ message: "No resume uploaded yet." });
    }
    res.json(resume);
  } catch {
    res.status(500).json({ message: "Failed to fetch resume" });
  }
});

router.post("/upload", async (req, res) => {
  try {
    const { fileName } = req.body;
    if (!fileName) {
      return res.status(400).json({ message: "fileName is required." });
    }

    const resume = await uploadResume(req.userId!, fileName);
    res.status(201).json(resume);
  } catch {
    res.status(500).json({ message: "Failed to upload resume" });
  }
});

export default router;
