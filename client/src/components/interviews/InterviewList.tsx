import InterviewCard from "./InterviewCard";

const interviews = [
    {
        company: "Google",
        role: "Frontend Developer",
        interviewer: "Sarah Johnson",
        date: "20 July 2026",
        time: "10:30 AM",
        meetingLink: "https://meet.google.com/",
    },
    {
        company: "Microsoft",
        role: "Software Engineer",
        interviewer: "David Lee",
        date: "22 July 2026",
        time: "2:00 PM",
        meetingLink: "https://teams.microsoft.com/",
    },
];

export default function InterviewList() {
    return (
        <div className="space-y-6">
            {interviews.map((item) => (
                <InterviewCard
                    key={item.company}
                    {...item}
                />
            ))}
        </div>
    );
}