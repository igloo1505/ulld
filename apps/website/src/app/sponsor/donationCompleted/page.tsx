import { LogoAsText } from "#/components/general/logoAsText";
import OversizedTitle from "#/components/general/text/oversizedTitle";
import Link from "next/link";
import React from "react";

interface DonationCompletedPageProps { }

const DonationCompletedPage = (props: DonationCompletedPageProps) => {
    return (
        <div
            className={
                "min-h-screen-noNav w-full flex flex-col justify-center items-center space-y-4 pt-[76px] px-8"
            }
        >
            <OversizedTitle>Thank You!</OversizedTitle>
            <div className={"max-w-[768px] text-center"}>
                Your support means more than you know. As of July 22nd, the build script is being wrapped up and documentation for all of the
                remaining components and developer features will be available soon. <LogoAsText /> is on track for a
                beta release this summer.
            </div>
            <div className={"max-w-[768px] text-center"}>
                A blog to keep track of the progress and plans for <LogoAsText /> is available <Link href="/blog" className={"text-link"}>here</Link>.
            </div>
        </div>
    );
};

DonationCompletedPage.displayName = "DonationCompletedPage";

export default DonationCompletedPage;
