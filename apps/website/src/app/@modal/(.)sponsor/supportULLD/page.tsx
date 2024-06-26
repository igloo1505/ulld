import SponsorULLDModalWrapper from "#/components/brand/sponsor/sponsorULLDModalWrapper";
import { ModalPageContainer } from "@ulld/ui/modalPage";
import React from "react";

interface SponsorULLDPageProps { }

const SponsorULLDPage = (props: SponsorULLDPageProps) => {
    return (
        <ModalPageContainer>
            <SponsorULLDModalWrapper isModal />
        </ModalPageContainer>
    );
};

SponsorULLDPage.displayName = "SponsorULLDPage";

export default SponsorULLDPage;
