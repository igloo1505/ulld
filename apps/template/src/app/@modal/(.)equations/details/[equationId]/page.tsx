// ULLD: protected-path pageFor:math/EquationDetailsModalPage
import EquationDetailsModalPage, {
    PageProps,
} from "#/corePages/modal/equationDetails";
import { PickPageParams } from "@ulld/utilities/types";
import React from "react";

const EquationDetailModalTemplate = async (
    props: PickPageParams<PageProps>,
) => {
    return <EquationDetailsModalPage {...props} />;
};

EquationDetailModalTemplate.displayName = "EquationDetailModalTemplate";

export default EquationDetailModalTemplate;
