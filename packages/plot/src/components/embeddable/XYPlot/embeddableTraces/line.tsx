import React, { useEffect, useMemo } from "react";
import { LineProps, linePropsSchema, StoredLinePlot } from "../utils/schemas";
import { getRandomId } from "@ulld/utilities/identity";
import { useXYPlotContext, useXYPlotDispatch } from "../context";
import AppendPlotItem from "../utils/appendPlotItem";
import { PlotThemeKey, UserDefinedConstants } from "../types";
import { ExtendedMath } from "@ulld/math/extendedMath";
import { getLabelFromPlotItem } from "../utils/chartConfigFromState";

interface Props {
    numericalData: {
        x: number[]
    }
    plotId: string
    theme: PlotThemeKey
    dataPoints: number
    range: [number, number]
    userDefinedConstants: UserDefinedConstants
}

const Line = (p: LineProps) => {
    let props = p as LineProps & Props
    let extendedMath = new ExtendedMath(props.userDefinedConstants || {})
    let parsedLineProps = linePropsSchema.parse(props);
    let f = parsedLineProps.f
    delete (parsedLineProps as any).f
    let data: StoredLinePlot & {traceType: "line"} = {
        ...parsedLineProps,
        data: props.numericalData.x.map((x) => f(x, extendedMath)),
        traceType: "line" as "line"
    }
    return <AppendPlotItem
        plotId={props.plotId}
        item={data} />
};

Line.displayName = "Line";

export default Line;
