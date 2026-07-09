import {
    LayoutDashboard,
    User,
    FileText,
    BriefcaseBusiness,
    ClipboardList,
    CalendarDays,
    Bell,
    Settings,
    LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        name: "Profile",
        icon: User,
        path: "/profile",
    },
    {
        name: "Resume",
        icon: FileText,
        path: "/resume",
    },
    {
        name: "Jobs",
        icon: BriefcaseBusiness,
        path: "/jobs",
    },
    {
        name: "Applications",
        icon: ClipboardList,
        path: "/applications",
    },
    {
        name: "Interviews",
        icon: CalendarDays,
        path: "/interviews",
    },
    {
        name: "Notifications",
        icon: Bell,
        path: "/notifications",
    },
    {
        name: "Settings",
        icon: Settings,
        path: "/settings",
    },
];

export default function Sidebar() {
    return (
        <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
            <div className="p-8">
                <h1 className="text-3xl font-bold text-blue-500">
                    HireHelp
                </h1>

                <p className="text-slate-400 text-sm mt-2">
                    Candidate Portal
                </p>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800"
                                }`
                            }
                        >
                            <Icon size={20} />
                            {item.name}
                        </NavLink>
                    );
                })}
            </nav>

            <div className="p-5 border-t border-slate-800">
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-slate-800">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
}