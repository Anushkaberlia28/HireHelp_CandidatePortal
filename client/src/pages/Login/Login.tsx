import { BriefcaseBusiness, ShieldCheck, Sparkles } from "lucide-react";

export default function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex">
            {/* Left */}
            <div className="hidden lg:flex flex-1 items-center justify-center px-16">
                <div className="max-w-lg text-white">
                    <h1 className="text-6xl font-bold mb-6">
                        HireHelp
                    </h1>

                    <p className="text-xl text-slate-300 leading-8">
                        Find your dream job, manage applications,
                        schedule interviews and build an outstanding
                        professional profile.
                    </p>

                    <div className="mt-12 space-y-6">

                        <div className="flex gap-4">
                            <BriefcaseBusiness className="text-blue-400" />
                            <div>
                                <h3 className="font-semibold">
                                    Smart Job Tracking
                                </h3>
                                <p className="text-slate-400">
                                    Track every application from one place.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <ShieldCheck className="text-green-400" />
                            <div>
                                <h3 className="font-semibold">
                                    Secure Profile
                                </h3>
                                <p className="text-slate-400">
                                    Your data stays protected.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Sparkles className="text-yellow-400" />
                            <div>
                                <h3 className="font-semibold">
                                    AI Resume Insights
                                </h3>
                                <p className="text-slate-400">
                                    Improve your resume with AI suggestions.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right */}

            <div className="flex-1 flex justify-center items-center p-10">

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl w-full max-w-md p-10">

                    <h2 className="text-4xl font-bold text-white">
                        Welcome Back
                    </h2>

                    <p className="text-slate-300 mt-2 mb-8">
                        Login to continue
                    </p>

                    <div className="space-y-5">

                        <input
                            placeholder="Email"
                            className="w-full rounded-xl bg-white/10 border border-slate-600 px-4 py-3 text-white outline-none focus:border-blue-500"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-xl bg-white/10 border border-slate-600 px-4 py-3 text-white outline-none focus:border-blue-500"
                        />

                        <button
                            className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition py-3 font-semibold text-white"
                        >
                            Login
                        </button>

                    </div>

                    <p className="mt-8 text-center text-slate-300">
                        Don't have an account?

                        <span className="text-blue-400 cursor-pointer ml-2 hover:text-blue-300">
                            Register
                        </span>

                    </p>

                </div>

            </div>
        </div>
    );
}