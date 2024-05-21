import SponsorULLDModalWrapper from '#/components/brand/sponsor/sponsorULLDModalWrapper';
import Analytics from '#/components/utility/analytics';
import ComingSoon from '#/components/utility/comingSoon';
import React from 'react'


interface SupportULLDPageProps {

}

const SupportULLDPage = (props: SupportULLDPageProps) => {
        return <>
            <Analytics
                pageView={{
                    path: "/sponsor/supportULLD",
                    title: "Sponsor: Support ULLD",
                }}
            />
            <ComingSoon />
        </>
}


SupportULLDPage.displayName = "SupportULLDPage"


export default SupportULLDPage;
