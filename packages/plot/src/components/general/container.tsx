import React, { ReactElement, ReactNode } from "react";
import { BasePlotProps } from "../../types";
import { InvalidVariablesWarning } from "./invalidVariables";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from "recharts";

export const PlotContainer = ({
    title,
    children,
    validVariables,
    desc,
}: BasePlotProps & { children: ReactElement; validVariables: boolean }) => {
    if (!validVariables) {
        return <InvalidVariablesWarning />;
    }
    return (
        <div className={"w-full h-fit max-h-[min(600px,80vh)] inline-block"}>
            {title && <h3 className={"text-lg font-semibold"}>{title}</h3>}
            <ResponsiveContainer width="100%" height="100%">
                {children}
            </ResponsiveContainer>
            {desc && <p className={"text-sm text-muted-foreground"}>{desc}</p>}
        </div>
    );
};

PlotContainer.displayName = "PlotContainer";
