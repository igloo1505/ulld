import type { ComponentType } from "react";
import { ValidIconName } from "@ulld/icons";
import { WithRequired } from "@ulld/utilities/types";
import { ChartConfig } from "../../../types";

export type XYPlotType = "line" | "bar" | "scatter";

export type TwoDFunc = (x: number) => number;

export type XYPlotDataItem = {
    type: XYPlotType;
    id: string | number;
    label?: string;
    color?: string
    icon?: ValidIconName | ComponentType<{}>;
} & (
        | {
            f?: TwoDFunc;
            y: never;
        }
        | {
            f: never;
            y: number[];
        }
    );

export type XYPlotDataItemByFunc = WithRequired<XYPlotDataItem, "f">;

export type RootShadProps = {
    minHeight?: number | string;
};

export type XYPlotProps = {
    range?: [number, number] | number;
    dataPoints?: number;
} & RootShadProps &
    (
        | {
            data: never;
            tabular: Record<string, number>[];
        }
        | {
            data: XYPlotDataItem[];
            tabular: never;
        }
    );

export type NumericDataItem = Record<string, number | string>;

export type TwoDDataValueReturnType = {
    dataKey: string;
    plotType: XYPlotType;
    data: NumericDataItem[];
}[];

export interface XYPropsReturnType {
    config: ChartConfig;
    data: TwoDDataValueReturnType;
}
