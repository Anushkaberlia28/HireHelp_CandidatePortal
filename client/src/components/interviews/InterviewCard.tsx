import {
    Calendar,
    Clock,
    Video,
    User,
    Building2,
} from "lucide-react";

interface Props {
    company: string;
    role: string;
    interviewer: string;
    date: string;
    time: string;
    meetingLink: string;
}

export default function InterviewCard({
    company,
    role,
    interviewer,
    date,
    time,
    meetingLink,
}: Props) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition">

            <div className="flex justify-between">

                <div>

                    <h2 className="text-xl font-bold text-white">
                        {role}
                    </h2>

                    <div className="mt-3 flex items-center gap-2 text-slate-400">
                        <Building2 size={16} />
                        {company}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                        <User size={16} />
                        {interviewer}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                        <Calendar size={16} />
                        {date}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                        <Clock size={16} />
                        {time}
                    </div>

                </div>

            </div>

            <div className="mt-6">

                <a
                    href={meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                >
                    <Video size={18} />
                    Join Meeting
                </a>

            </div>

        </div>
    );
}