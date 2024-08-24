import React from "react";
import { XYPlotProps } from "../../../types";
import { ParsedXYPlotProps } from "./utils/schemas";
import CartesianGrid from "../auxillaryComponents/cartesianGrid";
import YAxis from "../auxillaryComponents/yAxis";
import XAxis from "../auxillaryComponents/xAxis";

interface AuxillarChartComponentsProps {
  data: ParsedXYPlotProps;
}

const AuxillarChartComponents = ({data}: AuxillarChartComponentsProps) => {
  return <>
        {data.grid && <CartesianGrid data={data.grid}/>}
        {data.yAxis && <YAxis data={data.yAxis}/>}
        {data.xAxis && <XAxis data={data.xAxis}/>}
        </>;
};

AuxillarChartComponents.displayName = "AuxillarChartComponents";

export default AuxillarChartComponents;
