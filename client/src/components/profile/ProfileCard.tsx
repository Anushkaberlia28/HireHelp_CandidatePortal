import { Mail, Phone, MapPin } from "lucide-react";

export default function ProfileCard() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <div className="flex items-center gap-5">
                <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Profile"
                    className="h-24 w-24 rounded-full border-4 border-blue-500"
                />

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Anushka Berlia
                    </h2>

                    <p className="text-slate-400">
                        Frontend Developer
                    </p>
                </div>
            </div>

            <div className="mt-8 space-y-4 text-slate-300">

                <div className="flex items-center gap-3">
                    <Mail size={18} />
                    anushka@gmail.com
                </div>

                <div className="flex items-center gap-3">
                    <Phone size={18} />
                    +91 9876543210
                </div>

                <div className="flex items-center gap-3">
                    <MapPin size={18} />
                    Jaipur, Rajasthan
                </div>

            </div>

            <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700">
                Edit Profile
            </button>
        </div>
    );
}