import OversizedTitle from '#/components/general/text/oversizedTitle';
import ComingSoon from '#/components/utility/comingSoon';
import React from 'react'



interface DonationCompletedPageProps {

}

const DonationCompletedPage = (props: DonationCompletedPageProps) => {
        return <div
            className={
                "min-h-screen-noNav w-full flex flex-col justify-center items-center space-y-4 pt-[76px]"
            }
        >
             <OversizedTitle>Thank You!</OversizedTitle>
        </div>
}


DonationCompletedPage.displayName = "DonationCompletedPage"


export default DonationCompletedPage;
