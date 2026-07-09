import { Router } from "express";

const router = Router();

// Placeholder routes (module not fully implemented yet)
router.get("/", (req, res) => {
    res.status(501).json({ message: "Resume module not implemented yet" });
});

export default router;

