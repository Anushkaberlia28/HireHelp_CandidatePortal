const jobs = [
    {
        title: "Frontend Engineer",
        company: "Netflix",
    },
    {
        title: "React Developer",
        company: "Adobe",
    },
    {
        title: "Software Engineer",
        company: "Stripe",
    },
];

export default function RecommendedJobs() {
    return (
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

            <h2 className="text-xl font-bold text-white mb-6">
                Recommended Jobs
            </h2>

            <div className="space-y-5">

                {jobs.map((job) => (

                    <div
                        key={job.company}
                        className="border-b border-slate-800 pb-4"
                    >
                        <h3 className="text-white font-semibold">
                            {job.title}
                        </h3>

                        <p className="text-slate-400">
                            {job.company}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}