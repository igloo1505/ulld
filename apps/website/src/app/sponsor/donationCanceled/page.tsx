import Analytics from '#/components/utility/analytics';
import ComingSoon from '#/components/utility/comingSoon';
import React from 'react'



interface DonationCanceledPageProps {

}

const DonationCanceledPage = (props: DonationCanceledPageProps) => {
        return <>
            <Analytics
                pageView={{
                    path: "/sponsor/donationCanceled",
                    title: "Sponsor: Donation Canceled",
                }}
            />
            <ComingSoon />
        </>
}


DonationCanceledPage.displayName = "DonationCanceledPage"


export default DonationCanceledPage;
