export default function NotificationStats() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-6 text-xl font-semibold text-white">
                Notification Summary
            </h2>

            <div className="space-y-5">

                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Total
                    </span>

                    <span className="font-bold text-white">
                        18
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Unread
                    </span>

                    <span className="font-bold text-blue-400">
                        5
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Interviews
                    </span>

                    <span className="font-bold text-green-400">
                        2
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">
                        Applications
                    </span>

                    <span className="font-bold text-yellow-400">
                        8
                    </span>
                </div>

            </div>

            <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
                Mark All Read
            </button>

        </div>
    );
}