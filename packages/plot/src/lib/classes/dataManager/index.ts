import { PlotData } from "plotly.js";
import { DataManager2dPropOutput } from "../../schemas/dataManagerBaseProps";
import {PlotParams} from 'react-plotly.js';

export class DataManager2d {
    props: DataManager2dPropOutput
    x: number[]
    constructor(props: DataManager2dPropOutput){
        this.props = props
        this.x = this.linspace(props.xRange[0], props.xRange[1], props.axisPoints)
    }
    getDelta(min: number, max: number, n: number){
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
    getScatter2dData(){
        // RESUME: Come back here and handle the data generation. Make sure to make everything as strictly typed as possible.
        let data: Partial<PlotData>[] = [] 
        for (const k of this.props.f){
            data.push({
                x: this.x,
                y: this.x.map((x) => k.f(x)),
                ...(k.color && {
"line.color": k.color,
"marker.color": k.color,
                    "marker.line.color": k.color
                })
            }) 
        }
        return data
    }
}
