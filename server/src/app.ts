import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./modules/auth/routes/auth.routes.js";
import jobsRouter from "./modules/jobs/routes/jobs.routes";
import interviewStatusRouter from "./modules/interview-status/routes/interview-status.routes";
import applicationsRouter from "./modules/applications/routes/applications.routes";
import notificationsRouter from "./modules/notifications/routes/notifications.routes";
import profileRouter from "./modules/profile/routes/profile.routes";
import resumeRouter from "./modules/resume/routes/resume.routes";
import dashboardRouter from "./modules/dashboard/routes/dashboard.routes";

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

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

process.on("SIGINT", () => process.exit(0));

