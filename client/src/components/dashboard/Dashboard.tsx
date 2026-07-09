import {
    BriefcaseBusiness,
    FileText,
    CalendarDays,
    Bell,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import RecentApplications from "@/components/dashboard/RecentApplications";
import RecommendedJobs from "@/components/dashboard/RecommendedJobs";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";

import Card from "@/components/ui/Card";
import PageTitle from "@/components/ui/PageTitle";

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <PageTitle
                title="Dashboard"
                subtitle="Welcome back! Here's your hiring activity."
            />

            {/* Stats */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Applications"
                    value="28"
                    icon={BriefcaseBusiness}
                    color="bg-blue-600"
                />

                <StatCard
                    title="Resume Score"
                    value="91%"
                    icon={FileText}
                    color="bg-green-600"
                />

                <StatCard
                    title="Interviews"
                    value="6"
                    icon={CalendarDays}
                    color="bg-purple-600"
                />

                <StatCard
                    title="Notifications"
                    value="12"
                    icon={Bell}
                    color="bg-orange-600"
                />
            </div>

            {/* Top Widgets */}
            <div className="grid gap-6 lg:grid-cols-3">
                <Card>
                    <h2 className="mb-5 text-lg font-semibold text-white">
                        Profile Completion
                    </h2>

                    <div className="h-3 w-full rounded-full bg-slate-700">
                        <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-slate-400">
                            Complete your profile to improve visibility.
                        </span>

                        <span className="font-bold text-blue-400">78%</span>
                    </div>
                </Card>

                <Card>
                    <h2 className="mb-5 text-lg font-semibold text-white">
                        Upcoming Interview
                    </h2>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">
                            Frontend Developer
                        </h3>

                        <p className="text-slate-400">Google</p>

                        <p className="font-medium text-blue-400">
                            Tomorrow • 10:30 AM
                        </p>

                        <button className="mt-3 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
                            View Details
                        </button>
                    </div>
                </Card>

                <Card>
                    <h2 className="mb-5 text-lg font-semibold text-white">
                        Resume Status
                    </h2>

                    <div className="space-y-3">
                        <p className="font-semibold text-green-400">
                            ✓ Resume Uploaded
                        </p>

                        <p className="text-slate-400">
                            ATS Score: <span className="text-white font-semibold">91%</span>
                        </p>

                        <p className="text-slate-400">
                            Last updated 2 days ago.
                        </p>

                        <button className="rounded-lg border border-slate-700 px-4 py-2 text-white transition hover:bg-slate-800">
                            Update Resume
                        </button>
                    </div>
                </Card>
            </div>

            {/* Bottom Section */}
            <div className="grid gap-6 xl:grid-cols-3">
                <div className="space-y-6 xl:col-span-2">
                    <RecentApplications />
                    <RecommendedJobs />
                    <ActivityTimeline />
                </div>

                <div>
                    <NotificationsPanel />
                </div>
            </div>
        </div>
    );
}