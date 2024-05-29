import { LogoAsText } from '#/components/general/logoAsText';
import OversizedTitle from '#/components/general/text/oversizedTitle';
import ComingSoon from '#/components/utility/comingSoon';
import Link from 'next/link';
import React from 'react'



interface DonationCompletedPageProps {

}

const DonationCompletedPage = (props: DonationCompletedPageProps) => {
        return <div
            className={
                "min-h-screen-noNav w-full flex flex-col justify-center items-center space-y-4 pt-[76px] px-8"
            }
        >
             <OversizedTitle>Thank You!</OversizedTitle>
             <div className={"max-w-[768px] text-center"}>Your support means more than you know. As of May 28th, the documentation gathering script is being wrapped up and documentation for all of the internally developed components will be available soon. Documentation for developers looking to add their own components and extensions to <LogoAsText /> will follow, but the build script will be the focus after the initial documentation is generated. <LogoAsText /> is on track for a beta release this summer.</div>
         <div className={"max-w-[768px] text-center"}>A blog to keep track of the progress and plans for <LogoAsText /> will be up by June 1st. I'll be sure to keep everyone up to date regarding the progress of <LogoAsText /> on that blog available <Link className={"text-link"} href="/blog">here</Link>.</div>
        </div>
}


DonationCompletedPage.displayName = "DonationCompletedPage"


export default DonationCompletedPage;
