import { Upload } from "lucide-react";

export default function ResumeUpload() {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
                Upload Resume
            </h2>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 p-12 hover:border-blue-500">

                <Upload className="mb-4 text-blue-500" size={40} />

                <p className="text-white font-medium">
                    Click to upload your resume
                </p>

                <p className="text-slate-400 text-sm mt-2">
                    PDF, DOC, DOCX
                </p>

                <input type="file" className="hidden" />

            </label>

        </div>
    );
}