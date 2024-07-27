import { TwoDFunc, XYPlotDataItem } from "../../types";

export class DataItem {
    dataKey: string;
    y: number[] = [];
    constructor(public props: XYPlotDataItem, public dataPoints: number) {
        this.dataKey =
            typeof props.id === "string" ? props.id : props.id.toString();
    }
    getByFunc(x: number[], f: TwoDFunc){
          return x.map((n) => f(n))
    }
    calculate(x: number[]){
        this.y = typeof this.props.f === "function" ? this.getByFunc(x, this.props.f) : this.props.y
    }
}
