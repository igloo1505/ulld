import { XYPlotProps } from "../../types";
import { ShadChartConfigManager } from "./shad/chartConfig";
import { BarTraceManager } from "./plotSpecific/bar";
import { NumericList } from "@ulld/math/list";

type TraceType = BarTraceManager;

export class XYDataHandler {
    chartConfig: ShadChartConfigManager;
    traces: TraceType[] = [];
    dataPoints: number = 100;
    range: [number, number] = [0, 100];
    flattenedData: any[] = [];
    x: number[] = []
    constructor(public props: XYPlotProps) {
        if (props.range) {
            this.range = Array.isArray(props.range)
                ? props.range
                : [-props.range, props.range];
        }
        this.dataPoints = this.props.dataPoints || 100;
        this.x = NumericList.fromLinSpace(this.range[0], this.range[1], this.dataPoints).value
        this.chartConfig = new ShadChartConfigManager(props);
        if (this.props.tabular) {
            this.flattenedData = this.props.tabular;
        } else {
            this.traces = this.props.data.map((d) => {
                if (d.type === "bar") {
                    return new BarTraceManager(d, this.dataPoints);
                }
                /* TODO: Enable other classes here. */
                return new BarTraceManager(d, this.dataPoints);
            });
        }
    }
    private getIndexRecord(idx: number){
        let item:Record<string, number> = {}
        for (const t of this.traces) {
            item[t.dataKey] = t.y[idx]
        }
        return item
    }
    private getFlattenedData(){
        return Array(this.x.length).fill(0).map((x, i) => this.getIndexRecord(i))
        
    }
    calculate(){
        for (const t of this.traces) {
            t.calculate(this.x)
        }
        this.flattenedData = this.getFlattenedData()
    }
}
