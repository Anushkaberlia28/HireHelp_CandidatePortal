const events = [
    "Resume Shortlisted",
    "HR Round Completed",
    "Technical Round Scheduled",
    "Final Interview Pending",
];

export default function InterviewTimeline() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
                Interview Timeline
            </h2>

            <div className="space-y-5">

                {events.map((event, index) => (

                    <div
                        key={index}
                        className="flex gap-4"
                    >
                        <div className="h-3 w-3 rounded-full bg-blue-500 mt-2" />

                        <p className="text-slate-300">
                            {event}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}