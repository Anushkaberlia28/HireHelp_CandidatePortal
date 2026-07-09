import { Mail, Phone, MapPin } from "lucide-react";

export default function ProfileCard() {
    return (
        <div className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 shadow-lg hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="flex items-center gap-5">
                <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Profile"
                    className="h-24 w-24 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105"
                />

                <div>
                    <h2 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                        Anushka Berlia
                    </h2>

                    <p className="text-slate-400">
                        Frontend Developer
                    </p>
                </div>
            </div>

            <div className="mt-8 space-y-4 text-slate-300">

                <div className="flex items-center gap-3 group hover:text-blue-400 transition-colors">
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                    anushka@gmail.com
                </div>

                <div className="flex items-center gap-3 group hover:text-blue-400 transition-colors">
                    <Phone size={18} className="group-hover:scale-110 transition-transform" />
                    +91 9876543210
                </div>

                <div className="flex items-center gap-3 group hover:text-blue-400 transition-colors">
                    <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                    Jaipur, Rajasthan
                </div>

            </div>

            <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]">
                Edit Profile
            </button>
        </div>
    );
}