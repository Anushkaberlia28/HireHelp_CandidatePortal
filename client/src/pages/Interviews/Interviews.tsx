import PageTitle from "@/components/ui/PageTitle";

import InterviewList from "@/components/interviews/InterviewList";
import PreparationCard from "@/components/interviews/PreparationCard";
import InterviewStats from "@/components/interviews/InterviewStats";
import InterviewTimeline from "@/components/interviews/InterviewTimeline";

export default function Interviews() {
    return (
        <div className="space-y-8">

            <PageTitle
                title="Interviews"
                subtitle="Manage your upcoming interviews."
            />

            <div className="grid gap-6 xl:grid-cols-3">

                <div className="xl:col-span-2 space-y-6">
                    <InterviewList />
                </div>

                <div className="space-y-6">
                    <InterviewStats />
                    <PreparationCard />
                    <InterviewTimeline />
                </div>

            </div>

        </div>
    );
}