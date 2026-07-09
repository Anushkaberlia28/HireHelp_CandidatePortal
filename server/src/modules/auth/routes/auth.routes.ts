import { Router } from "express";
import { login, register, getMe } from "../services/auth.service.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const result = await login(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : "Login failed" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const result = await register(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : "Registration failed" });
  }
});

router.get("/me", async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization?.split(" ")[1] || "";
    const user = await getMe(token);

    res.json({ user });
  } catch (error) {
    res.status(401).json({ message: error instanceof Error ? error.message : "Unauthorized" });
  }
});

export default router;

