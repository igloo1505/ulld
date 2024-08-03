"use client"
import React, { ComponentPropsWithoutRef } from "react";
import { XAxis, YAxis } from "recharts";

export interface XYAxisProps<T extends object> {
    xAxis?: ComponentPropsWithoutRef<typeof XAxis> | keyof T | boolean;
    yAxis?: ComponentPropsWithoutRef<typeof YAxis> | keyof T | boolean;
}

/* TODO: Currently not working when it's provided in a separate component, but working perfectly when the same exact jsx is provided directly in the component. Not worth addressing right now, but come back and resolve this when time allows to make things easier when creating more plots. */

const XYAxis = <T extends object>({ xAxis, yAxis }: XYAxisProps<T>) => {
    return (
        <>
            {xAxis && (
                <XAxis
                    dataKey={typeof xAxis === "string" ? xAxis : undefined}
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    {...(typeof xAxis === "object" ? xAxis : {})}
                /* tickFormatter={(value) => value?.slice(0, 3)} */
                />
            )}
            {yAxis && (
                <YAxis
                    dataKey={typeof yAxis === "string" ? yAxis : undefined}
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    {...(typeof yAxis === "object" ? yAxis : {})}
                /* tickFormatter={(value) => value?.slice(0, 3)} */
                />
            )}
        </>
    );
};

XYAxis.displayName = "XYAxis";

export default XYAxis;
