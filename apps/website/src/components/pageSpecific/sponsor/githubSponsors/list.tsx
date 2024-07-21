import React from "react";
import SampleSponsorList from "./sampleSponsorList";
import SponsorList from "./sponsorList";

interface SponsorItem {

}

interface ExistingSponsorsListProps { 
    sponsors: SponsorItem[]
}

const ExistingSponsorsList = ({sponsors}: ExistingSponsorsListProps) => {
    return (
        <div className={"w-fit max-w-full px-6 sm:px-8 md:px-12"}>
            <h3 className={"text-3xl mt-8 mb-4"}>Sponsors</h3>
           {sponsors.length === 0 ? <SampleSponsorList /> : <SponsorList />} 
        </div>
    );
};

ExistingSponsorsList.displayName = "ExistingSponsorsList";

export default ExistingSponsorsList;
