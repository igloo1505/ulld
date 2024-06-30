import { useState } from "react";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { Variable } from "../types";
import { PlotValueEventData } from "../actions/sendPlotValueEvent";


declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "set-plot-value": CustomEvent<PlotValueEventData>;
    }
}

export const usePlotVariables = (
    plotId?: string,
    variables: Variable[] = [],
) => {
    let initialData: Record<string, number> = {};
    for (const k of variables) {
        initialData[k.label] = k.initialValue || 1;
    }
    const [value, setValue] = useState(initialData);
    const isValid = plotId || variables.length === 0;
    useEventListener("set-plot-value", (e) => {
        if (plotId && (e.detail.plotId === plotId)) {
            setValue({
                ...value,
                [e.detail.variable]: e.detail.value,
            });
        }
    });

    return { variables: value, isValid };
};
