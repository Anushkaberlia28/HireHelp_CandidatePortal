export default function ResumeScore() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
                ATS Score
            </h2>

            <div className="flex justify-center">

                <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-green-500">

                    <span className="text-4xl font-bold text-white">
                        91%
                    </span>

                </div>

            </div>

            <p className="mt-6 text-center text-slate-400">
                Excellent resume. Recruiters are likely to notice it.
            </p>

        </div>
    );
}