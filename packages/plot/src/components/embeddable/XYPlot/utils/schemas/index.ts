import { z } from "zod";
import { type plotThemeData, plotThemes } from "../../../../colors";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { NumericList } from "@ulld/math/list";
import {labelPositionSchema} from "./utilitySchemas"

export const xyPlotFunctionArgs = z.object({});

export const xAxisPropSchema = z.object({
    label: z.string().default("x"),
    tickLine: z.boolean().default(false),
    tickMargin: z.number().nullish(),
    axisLine: z.boolean().default(false),
});

export const yAxisPropSchema = xAxisPropSchema.merge(
    z.object({
        label: z.string().default("y"),
    }),
);

export const gridProps = z.object({
    vertical: z.boolean().default(false),
    max: z.number().optional(),
    min: z.number().optional(),
    opacity: z.number().min(0).max(1).default(1),
    fill: z.string().optional(),
});

export const xyPlotPropSchema = z
    .object({
        grid: z
            .union([gridProps, z.boolean()])
            .default(false)
            .transform((x) => (x === true ? gridProps.parse({}) : x)),
        yAxis: z
            .union([yAxisPropSchema, z.boolean()])
            .default({})
            .transform((y) => (y === true ? yAxisPropSchema.parse({}) : y)),
        xAxis: z
            .union([xAxisPropSchema, z.boolean()])
            .default({})
            .transform((x) => (x === true ? xAxisPropSchema.parse({}) : x)),
        title: z.string().optional(),
        x: z.number().array().optional(),
        range: z.tuple([z.number(), z.number()]).default([-10, 10]),
        theme: z
            .enum(plotThemes)
            .default("high vis")
            .transform((x) => x.replaceAll(" ", "_") as keyof typeof plotThemeData),
        dataPoints: z.number().int().default(100),
        dx: z.number().optional(),
    })
    .transform((data) => {
        let numericalData = data.x
            ? data.x.map((x) => ({ x }))
            : data.dx
                ? NumericList.fromRange(
                    data.range[0],
                    data.range[1],
                    data.dx,
                ).value.map((x) => ({ x }))
                : NumericList.fromLinSpace(
                    data.range[0],
                    data.range[1],
                    data.dataPoints,
                ).value.map((x) => ({ x }));
        return {
            ...data,
            numericalData,
        };
    });

export type XYPlotProps = z.input<typeof xyPlotPropSchema>;
export type ParsedXYPlotProps = z.output<typeof xyPlotPropSchema>;

const curveTypes = [
    "natural",
    "basis",
    "basisClosed",
    "basisOpen",
    "bumpX",
    "bumpY",
    "bump",
    "linear",
    "linearClosed",
    "natural",
    "monotoneX",
    "monotoneY",
    "monotone",
    "step",
    "stepBefore",
    "stepAfter",
] as const;

export const linePropsSchema = z.object({
    label: z.string(),
    color: z.string().optional(),
    f: z.function().args(z.number(), xyPlotFunctionArgs).returns(z.number()),
    type: z
        .string()
        .transform((x) => curveTypes.includes(x as any) ? x as typeof curveTypes[number] : curveTypes[0] as typeof curveTypes[number]),
    thickness: z.number().default(2),
    dot: z.union([
        z.number(),
        z.boolean()
    ]).default(false)
});


const barLabelSchema = z.object({
    label: z.string(),
    offset: z.number().default(12),
    fontSize: z.number().default(12),
    muted: z.boolean().default(false),
    hide: z.boolean().default(false),
    position: labelPositionSchema
})

export const barPropsSchema = z.object({
    label: z.union([
        z.string(),
        barLabelSchema
    ]),
    color: z.string().optional(),
    f: z.function().args(z.number(), xyPlotFunctionArgs).returns(z.number()),
    radius: z.number().default(4),
});

// Handle the fill color with tinycolor when back on wifi in the AM. Use a muted version of whatever the line color is if it isn't provided by the user. 
export const areaPropsSchema = linePropsSchema.merge(z.object({
    stackId: z.string().default("a"),
    fill: z.union([
        z.string(),
        z.boolean()
    ])
}))

export type LineProps = z.input<typeof linePropsSchema>;
export type ParsedLineProps = z.output<typeof linePropsSchema>;
export type XYFunctionArg = z.output<typeof xyPlotFunctionArgs>;

export type BarProps = z.input<typeof barPropsSchema>;
export type ParsedBarProps = z.input<typeof barPropsSchema>;

export type XYTraceProps = LineProps | BarProps;
