import { Search } from "lucide-react";

export default function JobSearch() {
    return (
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">

            <div className="flex items-center gap-3">

                <Search className="text-slate-400" />

                <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
                />

            </div>

        </div>
    );
}