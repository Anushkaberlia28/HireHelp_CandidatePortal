const notifications = [
    "Interview tomorrow at 10 AM",
    "Resume viewed by Amazon",
    "New jobs matching your profile",
];

export default function NotificationsPanel() {
    return (
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

            <h2 className="text-xl font-bold text-white mb-6">
                Notifications
            </h2>

            <div className="space-y-5">

                {notifications.map((note, index) => (

                    <div
                        key={index}
                        className="border-b border-slate-800 pb-3"
                    >
                        <p className="text-slate-300">
                            {note}
                        </p>
                    </div>

                ))}

            </div>

        </div>
    );
}