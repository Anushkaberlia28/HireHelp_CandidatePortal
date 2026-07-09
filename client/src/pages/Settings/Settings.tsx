import PageTitle from "@/components/ui/PageTitle";

import ProfileSettings from "@/components/settings/ProfileSettings";
import PasswordSettings from "@/components/settings/PasswordSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import DangerZone from "@/components/settings/DangerZone";

import Button from "@/components/ui/Button";

export default function Settings() {
    return (
        <div className="space-y-8">

            <PageTitle
                title="Settings"
                subtitle="Manage your account preferences."
            />

            <div className="grid gap-6 lg:grid-cols-2">

                <ProfileSettings />

                <PasswordSettings />

                <NotificationSettings />

                <AppearanceSettings />

            </div>

            <div className="flex justify-end">
                <Button>
                    Logout
                </Button>
            </div>

            <DangerZone />

        </div>
    );
}