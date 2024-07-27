import { BarProps } from "recharts";
import { XYPlotDataItem, XYPlotType } from "../../../types";
import { DataItem } from "../dataItem";

type BarComponentProps = Omit<BarProps, "ref">

export class BarTraceManager extends DataItem {
    type: XYPlotType = "bar";
    constructor(
        public props: XYPlotDataItem,
        public dataPoints: number,
    ) {
        super(props, dataPoints);
    }
    getProps(): BarComponentProps {
        return {
            dataKey: `${this.props.id}`,
            radius: 4,
            fill: `var(--color-${this.props.id})`
        };
    }
}
