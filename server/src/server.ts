import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./modules/auth/routes/auth.routes.js";

// Placeholder routers (so the server has route “surfaces” even before full module wiring)
import jobsRouter from "./modules/jobs/routes/jobs.routes.js";
import interviewStatusRouter from "./modules/interview-status/routes/interview-status.routes.js";
import applicationsRouter from "./modules/applications/routes/applications.routes.js";
import notificationsRouter from "./modules/notifications/routes/notifications.routes.js";
import profileRouter from "./modules/profile/routes/profile.routes.js";
import resumeRouter from "./modules/resume/routes/resume.routes.js";
import dashboardRouter from "./modules/dashboard/routes/dashboard.routes.js";

import { initDb } from "./database/initDb.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/jobs", jobsRouter);
app.use("/api/interview-status", interviewStatusRouter);
app.use("/api/applications", applicationsRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/profile", profileRouter);
app.use("/api/resume", resumeRouter);
app.use("/api/dashboard", dashboardRouter);

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

async function start() {
    const dbOk = await initDb();
    // initDb already logs DB status; keep this line for clarity.
    console.log(dbOk ? "DB connected" : "DB not connected");

    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    });
}


start().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
});

process.on("SIGINT", () => process.exit(0));


