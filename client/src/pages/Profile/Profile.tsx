import { useEffect, useState } from "react";

import PageTitle from "@/components/ui/PageTitle";
import ProfileCard from "@/components/profile/ProfileCard";
import SkillsCard from "@/components/profile/SkillsCard";
import EducationCard from "@/components/profile/EducationCard";
import ExperienceCard from "@/components/profile/ExperienceCard";
import Loader from "@/components/ui/Loader";
import { getProfile } from "@/services/profile.api";
import type { Profile } from "@/types";

export default function Profile() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getProfile()
            .then(setProfile)
            .catch((err) =>
                setError(err instanceof Error ? err.message : "Failed to load profile")
            )
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error || !profile) {
        return (
            <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-rose-200">
                {error ?? "Profile not found"}
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <PageTitle
                title="Profile"
                subtitle="Manage your professional profile."
            />

            <div className="grid gap-6 lg:grid-cols-3">
                <ProfileCard profile={profile} />

                <div className="lg:col-span-2 space-y-6">
                    <SkillsCard skills={profile.skills} />
                    <EducationCard education={profile.education} />
                    <ExperienceCard experience={profile.experience} />
                </div>
            </div>
        </div>
    );
}
