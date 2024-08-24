import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { ChartConfigType, StoredPlotData, XYPlotItem } from "../types";
import { plotThemeData } from "../../../../colors";
import { StoredBarPlot, StoredLinePlot } from "./schemas";

export const getLabelFromPlotItem = (d: Omit<XYPlotItem, "f"> | StoredLinePlot | StoredBarPlot) => {
    return d.id ? d.id : typeof d.label === "string" ? d.label : d.label.label;
};

export const getChartConfigFromState = (
    state?: StoredPlotData,
): ChartConfigType | undefined => {
    if(!state) {
        return undefined
    }
    let x: ChartConfigType = {};
    state.plotItems.forEach((k, i) => {
        let _label = getLabelFromPlotItem(k);
        x[_label] = {
            label: _label,
            color: k.color
                ? k.color
                : ArrayUtilities.clampInArray(plotThemeData[state.theme], i),
        };
    });
    return x;
};

export const getChartDataFromState = (
    state?: StoredPlotData,
): Record<string, number>[] | undefined => {
    if(!state){
        return undefined
    }
    if (!state?.numericalData) {
        return [];
    }
    let xData = state.numericalData.x;
    return xData.map((j, i) => {
        let l: Record<string, number> = { x: j };
        for (const d of state.plotItems) {
            l[getLabelFromPlotItem(d)] = d.data[i];
        }
        return l;
    });
};
