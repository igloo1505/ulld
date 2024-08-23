import { CalculatedPlotParams, XYPlotItem } from "../types";
import { ParsedLineProps } from "./schemas";
import { plotThemeData } from "../../../../colors";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { XYPlotState } from "../context";
import { getRandomId } from "@ulld/utilities/identity";

export const linePlotPropsToPlotItem = (props: ParsedLineProps, state: XYPlotState, calculatedParams: CalculatedPlotParams): {
    item: XYPlotItem
    newState: XYPlotState
} => {
    let dataKey = getRandomId()
    return {
        newState: {
        ...state,
            numericalData: state.numericalData.map((x) => ({
                ...x,
                [dataKey]: props.f(x.x, calculatedParams.functionArg)
            }))
        },
        item: {
            ...props,
            traceType: "line",
            dataKey: dataKey,
            index: calculatedParams.index,
            color: props.color ? props.color : ArrayUtilities.clampInArray(plotThemeData[calculatedParams.theme], calculatedParams.index),
        }
    } 
}
