import { MapPin, Clock } from "lucide-react";

interface Props {
    company: string;
    role: string;
    location: string;
    type: string;
}

export default function JobCard({
    company,
    role,
    location,
    type,
}: Props) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition">

            <div className="flex justify-between">

                <div>

                    <h2 className="text-xl font-bold text-white">
                        {role}
                    </h2>

                    <p className="text-slate-400">
                        {company}
                    </p>

                </div>

                <span className="rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                    {type}
                </span>

            </div>

            <div className="mt-6 flex gap-6 text-slate-400">

                <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {location}
                </div>

                <div className="flex items-center gap-2">
                    <Clock size={16} />
                    Posted today
                </div>

            </div>

            <div className="mt-6 flex gap-3">

                <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                    Apply
                </button>

                <button className="rounded-lg border border-slate-700 px-5 py-2 text-white hover:bg-slate-800">
                    Save
                </button>

            </div>

        </div>
    );
}