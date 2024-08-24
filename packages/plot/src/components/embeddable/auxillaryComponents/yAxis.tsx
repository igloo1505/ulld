import React from "react";
import { YAxis as Y } from "recharts";
import { YAxisProps } from "../XYPlot/utils/schemas";

interface Props {
    data: YAxisProps;
}

const YAxis = (props: Props) => {
    return <Y {...props.data} />;
};

YAxis.displayName = "YAxis";

export default YAxis;
