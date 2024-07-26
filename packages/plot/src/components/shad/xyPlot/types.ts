import { ComponentType } from "react";
import { ValidIconName } from "@ulld/icons";
import { ChartConfig } from "../../../lib/shad/shadChart";
import { TwoDFuncConfig } from "./schemas/2DFuncConfig";

export type XYPlotType = "line" | "bar" | "scatter";

export type TwoDFunc = (x: number) => number



export type TwoDDataValues = {
    x: number[]
    y: number[]
    f: never
    funcConfig: never
} | {
    f: TwoDFunc
    funcConfig?: TwoDFuncConfig
    x: never
    y: never
}

export type XYPlotDataItem = {
    type: XYPlotType;
    id: string | number;
    label?: string;
    color?:
    | string
    | {
        dark?: string;
        light?: string;
    };
    icon?: ValidIconName | ComponentType<{}>;
} & TwoDDataValues

export type RootShadProps = {
    minHeight?: number | string;
};

export interface XYPlotProps extends RootShadProps {
    data: XYPlotDataItem[];
}


export type NumericDataItem = Record<string, number | string>

export type TwoDDataValueReturnType = {
    dataKey: string
    plotType: XYPlotType
    data: NumericDataItem[]
}[]

export interface XYPropsReturnType {
    config: ChartConfig;
    data: TwoDDataValueReturnType
}
