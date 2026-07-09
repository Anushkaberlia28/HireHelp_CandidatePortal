import { Router } from "express";

const router = Router();

// Placeholder routes (module not fully implemented yet)
router.get("/", (req, res) => {
    res.status(501).json({ message: "Dashboard module not implemented yet" });
});

export default router;

