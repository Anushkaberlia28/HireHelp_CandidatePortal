import PageTitle from "@/components/ui/PageTitle";

import JobSearch from "@/components/jobs/JobSearch";
import JobFilters from "@/components/jobs/JobFilters";
import FeaturedJobs from "@/components/jobs/FeaturedJobs";

export default function Jobs() {
    return (
        <div className="space-y-8">

            <PageTitle
                title="Jobs"
                subtitle="Discover opportunities matching your profile."
            />

            <JobSearch />

            <JobFilters />

            <FeaturedJobs />

        </div>
    );
}