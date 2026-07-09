import {
    ArrowUpRight,
} from "lucide-react";

interface Props {
    title: string;
    value: string;
    icon: React.ElementType;
    color: string;
}

export default function StatCard({
    title,
    value,
    icon: Icon,
    color,
}: Props) {
    return (
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-blue-500 transition">

            <div className="flex justify-between">

                <div>

                    <p className="text-slate-400 text-sm">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2 text-white">
                        {value}
                    </h2>

                </div>

                <div
                    className={`h-12 w-12 rounded-xl ${color} flex items-center justify-center`}
                >
                    <Icon className="text-white" size={22} />
                </div>

            </div>

            <div className="mt-6 flex items-center text-green-400 text-sm">
                <ArrowUpRight size={16} />
                <span className="ml-1">
                    +12% this month
                </span>
            </div>

        </div>
    );
}