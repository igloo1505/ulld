import React from "react";
import { XAxis as X } from "recharts";
import { XAxisProps } from "../XYPlot/utils/schemas";

interface Props {
    data: XAxisProps;
}

const XAxis = (props: Props) => {
    return <X {...props.data} />;
};

XAxis.displayName = "XAxis";

export default XAxis;
