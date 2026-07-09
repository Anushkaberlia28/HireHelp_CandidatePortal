import { FileText } from "lucide-react";

export default function ResumePreview() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
                Resume Preview
            </h2>

            <div className="flex h-80 items-center justify-center rounded-xl bg-slate-800">

                <div className="text-center">

                    <FileText
                        size={70}
                        className="mx-auto text-blue-500"
                    />

                    <p className="mt-4 text-white">
                        Resume.pdf
                    </p>

                    <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                        Download
                    </button>

                </div>

            </div>

        </div>
    );
}