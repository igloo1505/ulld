import { ConfigEvalFixDisplay, EvaluationErrors } from "@ulld/configschema/evaluateConfigTypes";
import { useState, useEffect } from "react";
import { shouldShowModal } from "./utils";
import { useFormContext } from "@ulld/full-form/form";
import { ConfigurationFormType } from "../../staticData";

export const useConfigEvalFixOpen = (actionKey: ConfigEvalFixDisplay, errors: EvaluationErrors) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
       setOpen(shouldShowModal(actionKey, errors)) 
    }, [errors, actionKey])
    const form = useFormContext<ConfigurationFormType>()
    return {open, form}
}
