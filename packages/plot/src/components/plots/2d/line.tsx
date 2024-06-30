import React, { useCallback, useMemo } from "react";
import { BasePlotProps, LineAndScatterProps } from "../../../types";
import { PlotContainer } from "../../container";
import {
    lineAndScatterSchema,
    LineAndScatterSchema,
} from "../../../schemas/plotProps/lineAndScatterSchema";
import { usePlotVariables } from "../../../hooks/usePlotInput";
import { getRandomId } from "@ulld/utilities/identity";
/* import { PlotMathHandler } from "@ulld/math/plotMathHandler"; */

interface LinePlotProps
    extends BasePlotProps,
    LineAndScatterSchema,
    LineAndScatterProps { }

export const LinePlot = (props: LinePlotProps) => {
    const parsed = lineAndScatterSchema.parse(props);
    const vars = usePlotVariables(props.id, props.variables);
    let x = useMemo(() => , [props.min, props.max])
    const values = useMemo(() => props.fnc);
    return (
        <PlotContainer validVariables={vars.isValid}>
            <div>Line Plot here</div>
        </PlotContainer>
    );
};

LinePlot.displayName = "LinePlot";
