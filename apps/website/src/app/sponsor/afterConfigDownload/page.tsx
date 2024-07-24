import CallToFundAfterConfigDownload from "#/components/general/funding/callToFundAfterConfigDownload/main";
import React from "react";


const AfterConfigDownloadModalPage = (
) => {
    return <div className={"flex flex-col justify-center items-center px-6 py-8 min-h-screen-noNav"}>
        <CallToFundAfterConfigDownload />

    </div>
};

AfterConfigDownloadModalPage.displayName = "AfterConfigDownloadModalPage";

export default AfterConfigDownloadModalPage;
