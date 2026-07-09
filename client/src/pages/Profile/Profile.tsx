import PageTitle from "@/components/ui/PageTitle";

import ProfileCard from "@/components/profile/ProfileCard";
import SkillsCard from "@/components/profile/SkillsCard";
import EducationCard from "@/components/profile/EducationCard";
import ExperienceCard from "@/components/profile/ExperienceCard";

export default function Profile() {
    return (
        <div className="space-y-8">

            <PageTitle
                title="Profile"
                subtitle="Manage your professional profile."
            />

            <div className="grid gap-6 lg:grid-cols-3">

                <ProfileCard />

                <div className="lg:col-span-2 space-y-6">

                    <SkillsCard />

                    <EducationCard />

                    <ExperienceCard />

                </div>

            </div>

        </div>
    );
}