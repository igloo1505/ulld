import SponsorULLDModalWrapper from '#/components/brand/sponsor/sponsorULLDModalWrapper';
import React from 'react'


interface SupportULLDPageProps {

}

const SupportULLDPage = (props: SupportULLDPageProps) => {
    return (
        <div className={"flex flex-col justfiy-center items-center gap-6 min-h-screen w-fit p-8"}>
            <SponsorULLDModalWrapper />
        </div>
    )
}


SupportULLDPage.displayName = "SupportULLDPage"


export default SupportULLDPage;
