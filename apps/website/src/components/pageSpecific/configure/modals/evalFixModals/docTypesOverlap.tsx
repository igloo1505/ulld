import { EvaluationErrors } from "@ulld/configschema/evaluateConfigTypes";
import React from "react";
import { useConfigEvalFixOpen } from "./useEvalFixModalOpen";

interface DocTypesOverlapFixModalProps {
    errors: EvaluationErrors;
}

/* TODO: Need to handle this completely */
const DocTypesOverlapFixModal = ({errors}: DocTypesOverlapFixModalProps) => {
    const { open, form } = useConfigEvalFixOpen("docTypesOverlap", errors)
    return <div></div>;
};

DocTypesOverlapFixModal.displayName = "DocTypesOverlapFixModal";

export default DocTypesOverlapFixModal;
