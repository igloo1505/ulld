"use client";
import React from "react";
import PlotlyPlot, { PlotParams } from "react-plotly.js";

interface PlotProps {
    params: PlotParams;
}

export const Plot = ({ params }: PlotProps) => {
    /* console.log("params: ", params) */
    return <PlotlyPlot
        {...params}
    />;
};

Plot.displayName = "Plot";

