import PageTitle from "@/components/ui/PageTitle";
import ApplicationTable from "@/components/applications/ApplicationTable";

export default function Applications() {
    return (
        <div className="space-y-8">

            <PageTitle
                title="Applications"
                subtitle="Track all your job applications."
            />

            <ApplicationTable />

        </div>
    );
}