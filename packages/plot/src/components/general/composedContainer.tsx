import React, {ReactNode} from "react";
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

interface ComposedContainerProps { 
children: ReactNode
noXAxis?: boolean
noYAxis?: boolean
    noGrid?: boolean
}

export const ComposedContainer = ({ children, noXAxis, noYAxis, noGrid }: ComposedContainerProps) => {
    return (
        <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
        >
            {!noGrid && <CartesianGrid stroke="hsl(var(--muted)/0.2)" />}
            {!noXAxis && <XAxis />
            {!noYAxis && <YAxis />
            {children}
        </ComposedChart>
    );
};

ComposedContainer.displayName = "ComposedContainer";
