const applications = [
    {
        company: "Google",
        role: "Frontend Developer",
        status: "Interview",
    },
    {
        company: "Microsoft",
        role: "Software Engineer",
        status: "Applied",
    },
    {
        company: "Amazon",
        role: "React Developer",
        status: "Rejected",
    },
];

export default function RecentApplications() {
    return (
        <div className= "rounded-2xl bg-slate-900 border border-slate-800 p-6" >

        <h2 className="text-xl font-bold text-white mb-6" >
            Recent Applications
                </h2>

                < div className = "space-y-4" >

                {
                    applications.map((job) => (

                        <div
            key= { job.company }
            className = "flex justify-between items-center border-b border-slate-800 pb-4"
                        >
                        <div>

                        <h3 className="text-white font-semibold" >
                        { job.role }
                        </h3>

                    < p className = "text-slate-400" >
                    { job.company }
                    </p>

                    </div>

                    < span
              className = {`px-3 py-1 rounded-full text-sm
                ${job.status === "Interview"
                                ? "bg-green-600"
                                : job.status === "Applied"
                                    ? "bg-blue-600"
                                    : "bg-red-600"
                            }
              `}
                    >
                    { job.status }
                    </span>

                    </div>

        ))
}

</div>

    </div>
  );
}