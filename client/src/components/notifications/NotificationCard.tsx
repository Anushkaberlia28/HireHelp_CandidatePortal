import {
    Bell,
    BriefcaseBusiness,
    CalendarDays,
    UserCircle,
} from "lucide-react";

interface Props {
    title: string;
    message: string;
    time: string;
    type: "job" | "interview" | "profile";
    unread: boolean;
}

export default function NotificationCard({
    title,
    message,
    time,
    type,
    unread,
}: Props) {
    const icon =
        type === "job" ? (
            <BriefcaseBusiness size={20} />
        ) : type === "interview" ? (
            <CalendarDays size={20} />
        ) : (
            <UserCircle size={20} />
        );

    return (
        <div
            className={`rounded-2xl border p-5 transition ${unread
                    ? "border-blue-500 bg-slate-900"
                    : "border-slate-800 bg-slate-900"
                }`}
        >
            <div className="flex justify-between items-start">

                <div className="flex gap-4">

                    <div className="text-blue-500">
                        {icon}
                    </div>

                    <div>

                        <h3 className="font-semibold text-white">
                            {title}
                        </h3>

                        <p className="mt-2 text-slate-400">
                            {message}
                        </p>

                        <p className="mt-3 text-sm text-slate-500">
                            {time}
                        </p>

                    </div>

                </div>

                {unread && (
                    <Bell size={18} className="text-blue-500" />
                )}

            </div>

            <div className="mt-5 flex gap-3">

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Mark Read
                </button>

                <button className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-800">
                    Delete
                </button>

            </div>
        </div>
    );
}