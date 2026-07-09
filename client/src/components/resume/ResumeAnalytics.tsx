export default function ResumeAnalytics() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
                Resume Analytics
            </h2>

            <div className="space-y-5">

                <div className="flex justify-between">
                    <span className="text-slate-400">Views</span>
                    <span className="text-white font-semibold">42</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">Downloads</span>
                    <span className="text-white font-semibold">15</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">Applications</span>
                    <span className="text-white font-semibold">28</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">Shortlisted</span>
                    <span className="text-green-400 font-semibold">8</span>
                </div>

            </div>

        </div>
    );
}