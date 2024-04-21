import React from "react";
import { DataManager2d } from "../../../lib/classes/dataManager";
import { Plot } from "../plot";
import {
    DataManager2dLinePropInput,
    dataManagerPropsLine2d,
} from "../../../lib/schemas/plotSpecific/line2d";

const isWalkable = (d: any) => Array.isArray(d) || typeof d === "object";

const walkObject = (d: object | any[]) => {
    const isArr = Array.isArray(d);
    const iter = isArr ? d : Object.keys(d);
    iter.forEach((k) => {
        const item = isArr ? k : d[k];
        if (isWalkable(item)) {
            return walkObject(item);
        }
        console.log("isArray: ", isArr)
        console.log(`Typeof ${k}: ${typeof item}`)
        if (typeof item === "function") {
            console.log("FUNCTION: ", item);
        }
    });
};

const LinePlot2d = async (_props: DataManager2dLinePropInput) => {
    const props = await dataManagerPropsLine2d.parseAsync(_props);
    const manager = new DataManager2d(props);
    const data = manager.getDataAs("scatter");
    const propData = manager.getProps();
    console.log("data: ", JSON.stringify(data, null, 4));
    /* walkObject(propData); */
    return (
        <div>
            <Plot
                params={{
                    ...propData,
                    data: data,
                }}
            />
        </div>
    );
};

LinePlot2d.displayName = "LinePlot2d";

export default LinePlot2d;
