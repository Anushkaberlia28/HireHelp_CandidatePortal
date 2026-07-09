import PageTitle from "@/components/ui/PageTitle";

import NotificationList from "@/components/notifications/NotificationList";
import NotificationStats from "@/components/notifications/NotificationStats";

export default function Notifications() {
    return (
        <div className="space-y-8">

            <PageTitle
                title="Notifications"
                subtitle="Stay updated with your applications and interviews."
            />

            <div className="grid gap-6 xl:grid-cols-3">

                <div className="xl:col-span-2">
                    <NotificationList />
                </div>

                <NotificationStats />

            </div>

        </div>
    );
}