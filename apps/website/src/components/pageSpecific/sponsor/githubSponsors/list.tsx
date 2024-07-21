import React from "react";
import SampleSponsorList from "./sampleSponsorList";
import SponsorList from "./sponsorList";

interface SponsorItem {

}

interface ExistingSponsorsListProps { 
    sponsors: SponsorItem[]
}

const ExistingSponsorsList = ({sponsors}: ExistingSponsorsListProps) => {
    return sponsors.length === 0 ? <SampleSponsorList /> : <SponsorList />
};

ExistingSponsorsList.displayName = "ExistingSponsorsList";

export default ExistingSponsorsList;
