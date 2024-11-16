// ULLD: protected-path pageFor:math/AddEquationPage
import AddEquationPage, { PageProps } from "#/corePages/equations/add";
import React from "react";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const AddEquationPageTemplate = (props: PageProps) => {
    return (
        <>
            <DisableBookmark />
            <AddEquationPage {...props} />
        </>
    );
};

AddEquationPageTemplate.displayName = "AddEquationPageTemplate";

export default AddEquationPageTemplate;
