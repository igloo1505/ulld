import type {
    ComponentPropsWithoutRef,
    JSXElementConstructor,
    ReactElement,
    ReactNode,
} from "react";
import type { ChartContainer } from "../../../lib/shad/shadChart";
import type { plotThemeData } from "../../../colors";
import type { XYFunctionArg, ParsedLineProps, ParsedBarProps, ParsedXYPlotProps, StoredLinePlot, StoredBarPlot } from "./utils/schemas";

export type UserDefinedConstants = Record<string, number>

export type ChartConfigType = ComponentPropsWithoutRef<
    typeof ChartContainer
>["config"];

export type ChartChildren = ReactNode &
    ReactElement<any, string | JSXElementConstructor<any>>;

export type PlotThemeKey = keyof typeof plotThemeData;

type PlotAdditionalProps = {
    index: number;
    dataKey: string;
};

export type LineTraceFormattedProps = PlotAdditionalProps & ParsedLineProps;

export type BarTraceFormattedProps = PlotAdditionalProps & ParsedBarProps;

export type XYPlotItem =
    | (StoredLinePlot & { traceType: "line" })
    | (StoredBarPlot & { traceType: "bar" });


export type CalculatedPlotParams = {
    index: number;
    theme: PlotThemeKey;
    functionArg: XYFunctionArg;
};


export type StoredPlotData = {
    plotId: string
    plotItems: Omit<XYPlotItem, "f">[]
} & ParsedXYPlotProps
