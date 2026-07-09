import JobCard from "./JobCard";

const jobs = [
    {
        company: "Google",
        role: "Frontend Developer",
        location: "Bangalore",
        type: "Full Time",
    },
    {
        company: "Microsoft",
        role: "React Developer",
        location: "Hyderabad",
        type: "Remote",
    },
    {
        company: "Amazon",
        role: "Software Engineer",
        location: "Pune",
        type: "Hybrid",
    },
];

export default function FeaturedJobs() {
    return (
        <div className="space-y-6">

            {jobs.map((job) => (

                <JobCard
                    key={job.company + job.role}
                    {...job}
                />

            ))}

        </div>
    );
}