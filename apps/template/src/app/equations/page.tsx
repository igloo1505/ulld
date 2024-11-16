// ULLD: protected-path pageFor:math/EquationsPage
import EquationsPage, { PageProps } from "#/corePages/equations/list";
import React from "react";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const EquationsPageTemplate = (props: PageProps) => {
    return (
        <>
            <DisableBookmark />
            <EquationsPage {...props} />
        </>
    );
};

EquationsPageTemplate.displayName = "EquationsPageTemplate";

export default EquationsPageTemplate;
