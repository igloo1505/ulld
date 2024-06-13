import InternalReduxProvider from "#/state/provider";
import React, { useEffect, useRef, useState } from "react";
import DocTypesOverlapFixModal from "./docTypesOverlap";
import { useFormContext } from "@ulld/full-form/form";
import { ConfigurationFormData, ConfigurationFormType } from "../../staticData";
import { EvaluationErrors } from "@ulld/configschema/evaluateConfigTypes";
import evaluateConfig from "@ulld/configschema/evaluateConfig";
import { useEventListener } from "@ulld/hooks/useEventListener";

interface EvalFixModalsProps {
}



declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "evaluate-config-form": CustomEvent;
    }
}


const EvalFixModals = (props: EvalFixModalsProps) => {
    const form = useFormContext<ConfigurationFormType>()
    const _values = form.watch()
    const values = useRef<ConfigurationFormType>(null!)

    useEffect(() => {
        values.current = _values
    }, [_values])

    const [errors, setErrors] = useState<EvaluationErrors>([])



    useEventListener("evaluate-config-form", () => {
        let newErrors = evaluateConfig(values.current)
        setErrors(newErrors)
    })


    return (
        <InternalReduxProvider>
            <DocTypesOverlapFixModal errors={errors} />
        </InternalReduxProvider>
    );
};

EvalFixModals.displayName = "EvalFixModals";

export default EvalFixModals;
