import React from "react";
import {
    DataManager2dPropInput,
    dataManagerBaseProps,
} from "../../../lib/schemas/dataManagerBaseProps";
import { DataManager2d } from "../../../lib/classes/dataManager";



const LinePlot2d = (_props: DataManager2dPropInput) => {
    const manager = new DataManager2d(dataManagerBaseProps.parse(_props));
    return <div></div>;
};

LinePlot2d.displayName = "LinePlot2d";

export default LinePlot2d;
