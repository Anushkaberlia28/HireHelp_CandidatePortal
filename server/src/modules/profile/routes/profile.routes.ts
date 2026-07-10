import { Router } from "express";
import { authenticate } from "../../../middleware/auth.middleware.js";
import { getProfile, updateProfile } from "../services/profile.service.js";

const router = Router();

router.use(authenticate);

router.get("/", async (req, res) => {
  try {
    const profile = await getProfile(req.userId!);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found." });
    }
    res.json(profile);
  } catch {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
});

router.put("/", async (req, res) => {
  try {
    const profile = await updateProfile(req.userId!, req.body);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found." });
    }
    res.json(profile);
  } catch {
    res.status(500).json({ message: "Failed to update profile" });
  }
});

export default router;
