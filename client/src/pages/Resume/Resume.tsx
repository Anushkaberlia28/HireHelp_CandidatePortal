import PageTitle from "@/components/ui/PageTitle";

import ResumeUpload from "@/components/resume/ResumeUpload";
import ResumePreview from "@/components/resume/ResumePreview";
import ResumeScore from "@/components/resume/ResumeScore";
import ResumeAnalytics from "@/components/resume/ResumeAnalytics";

export default function Resume() {
    return (
        <div className="space-y-8">

            <PageTitle
                title="Resume"
                subtitle="Manage your professional resume."
            />

            <div className="grid gap-6 lg:grid-cols-3">

                <div className="space-y-6">

                    <ResumeUpload />

                    <ResumeScore />

                </div>

                <div className="lg:col-span-2 space-y-6">

                    <ResumePreview />

                    <ResumeAnalytics />

                </div>

            </div>

        </div>
    );
}