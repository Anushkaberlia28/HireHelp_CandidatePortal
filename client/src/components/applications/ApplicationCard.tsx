import { Building2, CalendarDays, MapPin } from "lucide-react";
import ApplicationStatus from "./ApplicationStatus";

interface Props {
    company: string;
    role: string;
    location: string;
    appliedDate: string;
    status: "Applied" | "Interview" | "Rejected" | "Offer";
}

export default function ApplicationCard({
    company,
    role,
    location,
    appliedDate,
    status,
}: Props) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition">

            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-xl font-bold text-white">
                        {role}
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                        <Building2 size={16} />
                        {company}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                        <MapPin size={16} />
                        {location}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                        <CalendarDays size={16} />
                        Applied {appliedDate}
                    </div>
                </div>

                <ApplicationStatus status={status} />
            </div>

            <div className="mt-6 flex gap-3">

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    View
                </button>

                <button className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-800">
                    Withdraw
                </button>

            </div>

        </div>
    );
}