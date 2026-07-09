import { Routes, Route } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import Login from "@/pages/Login";
import Register from "@/pages/Register";

import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Resume from "@/pages/Resume";
import Jobs from "@/pages/Jobs";
import Applications from "@/pages/Applications";
import Interviews from "@/pages/Interviews";
import Notifications from "@/pages/Notifications";
import Settings from "@/pages/Settings";

export default function AppRouter() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<AuthLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            {/* Protected Routes */}
            <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/interviews" element={<Interviews />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}