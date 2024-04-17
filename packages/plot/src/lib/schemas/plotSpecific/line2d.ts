import { f2d, functionFieldTransform } from "../function";
import { modeSchema, plotDataSchema } from "../plotDataSchema";
import { z } from "zod";
import { twoDimensionalPlotTypes } from "../staticData";
import { dataManagerBaseProps } from "../dataManagerBaseProps";
import { internalPropState } from "../internalStateSchema";
import { AxisName } from "plotly.js";



export const functionObjectLine2dSchema = plotDataSchema.merge(
    z.object({
        f: f2d,
        type: z.literal("scatter").default("scatter"),
        mode: modeSchema.default("lines")
    }),
).transform((a) => {
        if (a.hide) {
            a.showlegend = false;
        }
        if (a.label && !a.name) {
            a.name = a.label;
        }
        a.marker.color = a.color ? a.color : "hsl(var(--primary))"
    return a
})

export const functionField2d = z
    .union([f2d, functionObjectLine2dSchema])
    .transform((data) => {
        return functionFieldTransform<
            typeof data,
            z.output<typeof functionObjectLine2dSchema>
        >(data, functionObjectLine2dSchema);
    });

export const internalPropStateLine2d = internalPropState.merge(
    z.object({
        f: z
            .union([functionField2d, functionField2d.array()])
            .default([])
            .transform((a) => (Array.isArray(a) ? a : [a])),
    }),
);

export const dataManagerPropsLine2d = dataManagerBaseProps
    .merge(internalPropStateLine2d)
    .default({})
    .transform((a) => {
        return {
            ...a,
            layout: {
            ...a.layout,
                title: {
                    text: a.layout.title.text || a.title,
                    ...a.layout.title,
                },
                xaxis: {
                    ...a.layout.xaxis,
                    ...a.xAxis,
                    showgrid: a.noGrid ? false : undefined,
                    nticks: a.xTicks || a.xAxis.nticks,
                    title: {
                    ...a.layout.xaxis.title,
                        ...a.xAxis.title,
                        text: a.xAxis?.title?.text || a.xLabel,
                    },
                },
                yaxis: {
                    ...a.layout.yaxis,
                    ...a.xAxis,
                    showgrid: a.noGrid ? false : undefined,
                    nticks: a.yTicks || a.yAxis.nticks,
                    title: {
                    ...a.layout.yaxis.title,
                        ...a.yAxis.title,
                        text: a.yAxis?.title?.text || a.yLabel,
                    },
                    ...(a.cube && {
                        scaleanchor: "x" as AxisName,
                        scaleratio: 1,
                    }),
                },
            },
            xRange: a.xRange || a.range,
            yRange:
                a.yRange || twoDimensionalPlotTypes.includes(a.type as any)
                    ? undefined
                    : a.range, // Should be undefined in 2d. Create a list of 2d types and validate against that to change the default.
            zRange: a.zRange || undefined,
        };
    });

export type DataManager2dLinePropInput = z.input<typeof dataManagerPropsLine2d>;
export type DataManager2dLinePropOutput = z.output<
    typeof dataManagerPropsLine2d
>;

export type PlotDataLine2dOutput = z.output<typeof functionObjectLine2dSchema>;
