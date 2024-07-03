import { ReactNode, ComponentProps } from "react";
// TODO: Turn this back on when can import it properly after install.
// import {ExtendedMath} from "@ulld/math/extendedMath"
export type ExtendedMath = any;
import type {
    ComposedChart,
    Line,
    Area,
    Bar,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Sector,
    Cell,
} from "recharts";

export type Variable = {
    label: string;
    initialValue?: number;
};

export type BasePlotProps = {
    id?: string;
    title?: ReactNode;
    desc?: ReactNode;
    dataPoints?: number;
    variables?: Variable[];
    noGrid?: boolean;
};

export interface LineComponentProps extends ComponentProps<typeof Line> { }
export interface XAxisProps extends ComponentProps<typeof XAxis> { }
export interface YAxisProps extends ComponentProps<typeof YAxis> { }
export interface AreaComponentProps extends ComponentProps<typeof Area> { }
export interface BarComponentProps extends ComponentProps<typeof Bar> { }
export interface ScatterComponentProps extends ComponentProps<typeof Scatter> { }
export interface PieChartComponentProps extends ComponentProps<typeof PieChart> {}
export interface PieComponentProps extends ComponentProps<typeof Pie> {}
export interface SectorComponentProps extends ComponentProps<typeof Sector> {}
export interface CellComponentProps extends ComponentProps<typeof Cell> {}

export type BasicPlotTraceProps = {
    color?: string;
};

export type MathFunc = (math: ExtendedMath) => number;

export type LineAndScatterProps = {
    min?: number | MathFunc;
    max?: number | MathFunc;
    fnc: (x: number, math: ExtendedMath) => number;
};

export type BasePlot2dProps = {
    xAxis?: XAxisProps;
    yAxis?: YAxisProps;
} & BasePlotProps;
