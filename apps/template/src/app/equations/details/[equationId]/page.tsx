// ULLD: protected-path pageFor:math/EquationDetailsPage
import EquationDetailsPage, { PageProps } from "#/corePages/equations/details";
import React from "react";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const EquationDetailsPageTemplate = (props: PageProps) => {
    return (
        <>
            <DisableBookmark />
            <EquationDetailsPage {...props} isModal={false} />
        </>
    );
};

EquationDetailsPageTemplate.displayName = "EquationDetailsPageTemplate";

export default EquationDetailsPageTemplate;
