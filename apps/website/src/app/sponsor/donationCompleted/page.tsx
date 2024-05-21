import Analytics from '#/components/utility/analytics';
import ComingSoon from '#/components/utility/comingSoon';
import React from 'react'



interface DonationCompletedPageProps {

}

const DonationCompletedPage = (props: DonationCompletedPageProps) => {
        return <>
            <Analytics
                pageView={{
                    path: "/sponsor/donationCompleted",
                    title: "Sponsor: Donation Completed",
                }}
            />
            <ComingSoon />
        </>
}


DonationCompletedPage.displayName = "DonationCompletedPage"


export default DonationCompletedPage;
