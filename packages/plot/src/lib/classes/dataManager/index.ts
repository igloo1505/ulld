import { PlotData } from "plotly.js";
import { PlotParams } from "react-plotly.js";
import {
    DataManager2dLinePropOutput,
    PlotDataLine2dOutput,
} from "../../schemas/plotSpecific/line2d";
import { PlotDataOutput } from "../../schemas/plotDataSchema";
import { PlotFunctionObjects, PlotParamTypes } from "../../types";
import { EnabledPlotTypes, PlotType } from "../../schemas/plotTypeSchema";
import { PartialBy } from "@ulld/utilities/types/utilityTypes";
import { getColorMap } from "@ulld/tailwind/themeUtils";

export class DataManager2d {
    props: PlotParamTypes;
    x: number[];
    constructor(props: PlotParamTypes) {
        this.props = props;
        this.x = this.linspace(
            props.xRange[0] || props.range[0],
            props.xRange[1] || props.range[1],
            props.axisPoints,
        );
    }
    getDelta(min: number, max: number, n: number) {
        return (max - min) / n;
    }
    linspace(min: number, max: number, n: number) {
        let d = [];
        const delta = (max - min) / n;
        for (var n = min; n <= max; n += delta) {
            d.push(n);
        }
        return d;
    }
    async applyTheme(data: PlotParamTypes) {
        let colors = this.props.darkMode
            ? this.props.ulldTheme.colorMap.dark
            : this.props.ulldTheme.colorMap.dark;
        console.log("colors: ", colors);
    }
    applyColor(data: PlotFunctionObjects, color?: string) {
        if (!color) return data;
        data.line.color = data.line.color || color;
        data.marker.color = data.marker.color || color;
        data.marker.line.color = data.marker.line.color || color;
        return data;
    }
    getScatter2dData(f: PlotDataLine2dOutput) {
        let fnc = f.f;
        delete (f as any).f;
        let data = this.applyColor(f);
        data.x = this.x;
        data.y = this.x.map((x) => fnc(x));
        return data;
    }
    getDataAs(plotType: EnabledPlotTypes) {
        if (plotType === "scatter") {
            return this.props.f.map((f) => this.getScatter2dData(f));
        }
        return this.props.f.map((f) => this.getScatter2dData(f));
    }
    getProps() {
        let d = this.props;
        delete (d as any).f;
        return d;
    }
}
