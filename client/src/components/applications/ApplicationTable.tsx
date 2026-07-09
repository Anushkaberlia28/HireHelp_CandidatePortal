import ApplicationCard from "./ApplicationCard";

const applications = [
    {
        company: "Google",
        role: "Frontend Developer",
        location: "Bangalore",
        appliedDate: "2 days ago",
        status: "Interview",
    },
    {
        company: "Microsoft",
        role: "React Developer",
        location: "Hyderabad",
        appliedDate: "5 days ago",
        status: "Applied",
    },
    {
        company: "Amazon",
        role: "Software Engineer",
        location: "Pune",
        appliedDate: "1 week ago",
        status: "Rejected",
    },
    {
        company: "Netflix",
        role: "Frontend Engineer",
        location: "Remote",
        appliedDate: "Today",
        status: "Offer",
    },
] as const;

export default function ApplicationTable() {
    return (
        <div className="space-y-6">
            {applications.map((app) => (
                <ApplicationCard
                    key={app.company + app.role}
                    {...app}
                />
            ))}
        </div>
    );
}