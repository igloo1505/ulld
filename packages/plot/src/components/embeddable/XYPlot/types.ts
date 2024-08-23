import type {
    ComponentPropsWithoutRef,
    JSXElementConstructor,
    ReactElement,
    ReactNode,
} from "react";
import type { ChartContainer } from "../../../lib/shad/shadChart";
import type { plotThemeData } from "../../../colors";
import type { XYFunctionArg, ParsedLineProps, ParsedBarProps } from "./utils/schemas";

export type ChartConfigType = ComponentPropsWithoutRef<
    typeof ChartContainer
>["config"];

export type ChartChildren = ReactNode &
    ReactElement<any, string | JSXElementConstructor<any>>;

export type ChartThemeKey = keyof typeof plotThemeData;

type PlotAdditionalProps = {
    index: number;
    dataKey: string;
};

export type LineTraceFormattedProps = PlotAdditionalProps & ParsedLineProps;

export type BarTraceFormattedProps = PlotAdditionalProps & ParsedBarProps;

export type XYPlotItem =
    | (LineTraceFormattedProps & { traceType: "line" })
    | (BarTraceFormattedProps & { traceType: "bar" });

export type CalculatedPlotParams = {
    index: number;
    theme: ChartThemeKey;
    x: number[];
    functionArg: XYFunctionArg;
};
