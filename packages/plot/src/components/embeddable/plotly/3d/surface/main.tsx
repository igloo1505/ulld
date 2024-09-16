import React from "react";
import Plot, { PlotParams } from "react-plotly.js";
import {
  plotlyPlotParamsSchema,
  PlotyParamsInput,
} from "../../zod/plotParams/main";

interface SurfacePlotProps extends PlotyParamsInput {}

const SurfacePlot = (_props: SurfacePlotProps) => {
  let props = plotlyPlotParamsSchema.parse(_props);
  return <Plot {...props} />;
};

SurfacePlot.displayName = "SurfacePlot";

export default SurfacePlot;
