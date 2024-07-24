import CallToFundAfterConfigDownload from "#/components/general/funding/callToFundAfterConfigDownload/main";
import { ModalPageContainer } from "@ulld/ui/modalPage";
import React from "react";

const AfterConfigDownloadModalPage = () => {
    return (
        <ModalPageContainer>
            <CallToFundAfterConfigDownload isModal />;
        </ModalPageContainer>
    );
};

AfterConfigDownloadModalPage.displayName = "AfterConfigDownloadModalPage";

export default AfterConfigDownloadModalPage;
