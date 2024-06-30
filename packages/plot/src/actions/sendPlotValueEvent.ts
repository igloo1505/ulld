export interface PlotValueEventData {
    plotId: string;
    value: number;
    variable: string;
}


export const sendPlotValueEvent = (data: PlotValueEventData) => {
       window.dispatchEvent(new CustomEvent("set-plot-value", {
        detail: data
    }))
}

