import NotificationCard from "./NotificationCard";

const notifications = [
    {
        title: "Interview Scheduled",
        message: "Google scheduled your interview for tomorrow.",
        time: "5 mins ago",
        type: "interview",
        unread: true,
    },
    {
        title: "Application Viewed",
        message: "Amazon recruiter viewed your application.",
        time: "2 hours ago",
        type: "job",
        unread: true,
    },
    {
        title: "Profile Updated",
        message: "Your profile was updated successfully.",
        time: "Yesterday",
        type: "profile",
        unread: false,
    },
] as const;

export default function NotificationList() {
    return (
        <div className="space-y-5">
            {notifications.map((notification, index) => (
                <NotificationCard
                    key={index}
                    {...notification}
                />
            ))}
        </div>
    );
}