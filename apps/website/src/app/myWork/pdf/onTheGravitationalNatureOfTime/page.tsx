import PdfPageContainer from "#/components/pdfImagePage/pageContainer";
import React, { type ReactNode } from "react";

const PaperPage = (): ReactNode => {
    return (
        <PdfPageContainer
            pdfTitle="On the gravitational nature of time"
            pages={[
                "/pdfImages/onTheGravitationalNatureOfTime/1.png",
                "/pdfImages/onTheGravitationalNatureOfTime/2.png",
                "/pdfImages/onTheGravitationalNatureOfTime/3.png",
                "/pdfImages/onTheGravitationalNatureOfTime/4.png",
            ]}
        />
    );
};

PaperPage.displayName = "PaperPage";

export default PaperPage;
