import GithubSponsorList from "#/components/pageSpecific/sponsor/githubSponsors/list";
import SponsorshipRequestForm from "#/components/pageSpecific/sponsor/githubSponsors/sponsorRequestForm/main";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import React from "react";


const SponsorULLDPage = () => {
    return (
        <div
            className={
                "w-full h-full min-h-screen flex flex-col justify-start items-center pt-[96px]"
            }
        >
            <h1 className={"text-5xl font-bold h-16 flex flex-row justify-center"}>
                <span className={"inline"}>Sponsor</span>
                <span className={"inline w-[100px] -translate-y-1"}>
                    <AnimatedUlldLogo
                        noAnimate
                        delay={3}
                        show={true}
                        speed={3}
                    />
                </span>
            </h1>
            <p className={"text-muted-foreground text-sm px-6 sm:px-8 text-center"}>
                Your support goes a long way to support free, open source, decentrialized software built to enable students and academics to be at their best.
            </p>
            <GithubSponsorList 
                /* TODO: Actually get sponsors from sponsorkit and provide them here ace. */
                sponsors={[]}
            />
            <SponsorshipRequestForm />
        </div>
    );
};


SponsorULLDPage.displayName = "SponsorULLDPage";

export default SponsorULLDPage;
