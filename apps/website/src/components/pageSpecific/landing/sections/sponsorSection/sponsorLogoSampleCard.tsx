import React from "react";
import SponsorLogoCard from "./sponsorLogoCard";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import clsx from 'clsx'

interface SponsorLogoSampleCardProps { 
    isPrimary?: boolean
}

const SponsorLogoSampleCard = ({isPrimary}: SponsorLogoSampleCardProps) => {
    return (
        <SponsorLogoCard
            classes={{
                container: clsx("w-full", isPrimary ? "" : "lg:w-[calc(50%-1rem)]"),
            }}
            isPrimary={isPrimary}
            logo={<AnimatedUlldLogo
                show
            />}
            title="Uh Little Less Dum"
            desc="This is a sample sponsor card. Replace one of these cards with your logo and a link to your site by clicking below."
            href="/sponsor/newSponsors"
        />
    );
};

SponsorLogoSampleCard.displayName = "SponsorLogoSampleCard";

export default SponsorLogoSampleCard;
