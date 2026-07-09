import {
    Bell,
    Search,
} from "lucide-react";

export default function Header() {
    return (
        <header className="h-20 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-8">

            <div className="relative">

                <Search
                    className="absolute left-3 top-3 text-slate-400"
                    size={18}
                />

                <input
                    placeholder="Search jobs..."
                    className="pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />

            </div>

            <div className="flex items-center gap-6">

                <Bell className="text-white" />

                <img
                    src="https://i.pravatar.cc/150?img=12"
                    className="h-10 w-10 rounded-full"
                />

            </div>

        </header>
    );
}