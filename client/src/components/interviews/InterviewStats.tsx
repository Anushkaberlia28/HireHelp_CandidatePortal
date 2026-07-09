export default function InterviewStats() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
                Interview Statistics
            </h2>

            <div className="space-y-5">

                <div className="flex justify-between">
                    <span className="text-slate-400">Scheduled</span>
                    <span className="text-white font-semibold">6</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">Completed</span>
                    <span className="text-white font-semibold">3</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">Offers</span>
                    <span className="text-green-400 font-semibold">2</span>
                </div>

            </div>

        </div>
    );
}