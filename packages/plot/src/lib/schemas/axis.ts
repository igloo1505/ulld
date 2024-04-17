import { z } from "zod";
import {
    autoMarginSchema,
    autoRangeSchema,
    exponentFormatSchema,
} from "./generalPlotlySchemas";
import { fontSchema } from "./fontSchema";
import { YAxisName, XAxisName } from "plotly.js";

const xAxisName = z.union([
    z.literal("x"),
    z.literal("x2"),
    z.literal("x3"),
    z.literal("x4"),
    z.literal("x5"),
    z.literal("x6"),
    z.literal("x7"),
    z.literal("x8"),
    z.literal("x9"),
    z.literal("x10"),
    z.literal("x11"),
]).optional().transform((x) => x ? x as XAxisName : undefined)

const yAxisName = z.union([
    z.literal("y"),
    z.literal("y2"),
    z.literal("y3"),
    z.literal("y4"),
    z.literal("y5"),
    z.literal("y6"),
    z.literal("y7"),
    z.literal("y8"),
    z.literal("y9"),
    z.literal("y10"),
    z.literal("y11"),
]).optional().transform((x) => x ? x as YAxisName : undefined)

export const xAxis = z.object({
    anchor: z.union([yAxisName.innerType(), xAxisName.innerType(), z.literal("free")]).default("free"),
    automargin: z
        .boolean()
        .optional()
        .default(true),
    autorange: autoRangeSchema.default(true),
    color: z
        .string()
        .default("hsl(var(--muted-foreground))")
        .describe(
            "Sets color for line, font, tick and grid colors all at once. Grid color is automatically blended with the background to become more muted.",
        ),
    constrain: z.union([z.literal("range"), z.literal("domain")]).optional(),
    constraintoward: z
        .union([
            z.literal("left"),
            z.literal("center"),
            z.literal("right"),
            z.literal("top"),
            z.literal("middle"),
            z.literal("bottom"),
        ])
        .default("center"),
    dividercolor: z.string().default("hsl(var(--muted-foreground))"),
    dividerwidth: z.number().default(1),
    exponentformat: exponentFormatSchema.default("power"),
    gridcolor: z.string().optional(),
    griddash: z
        .union([
            z.literal("solid"),
            z.literal("dot"),
            z.literal("dash"),
            z.literal("longdash"),
            z.literal("dashdot"),
            z.literal("longdashdot"),
        ])
        .default("solid"),
    gridwidth: z.number().default(1),
    layer: z
        .union([z.literal("above traces"), z.literal("below traces")])
        .default("above traces"),
    linecolor: z.string().optional(),
    linewidth: z.number().default(1),
    font: fontSchema.default({}),
    scaleanchor: yAxisName,
    scaleratio: z.number().min(0).default(1),
    tickfont: fontSchema.default({
        color: "hsl(var(--muted-foreground))",
        size: 6,
    }),
    ticklabelposition: z
        .union([
            z.literal("outside"),
            z.literal("inside"),
            z.literal("outside top"),
            z.literal("inside top"),
            z.literal("outside left"),
            z.literal("inside left"),
            z.literal("outside right"),
            z.literal("inside right"),
            z.literal("outside bottom"),
            z.literal("inside bottom"),
        ])
        .default("outside"),
    nticks: z.number().optional(),
    title: z
        .object({
            text: z.string().optional(),
            font: fontSchema.default({
                color: "hsl(var(--muted-foreground))",
            }),
        })
        .default({}),
});

export const yAxis = xAxis.merge(
    z.object({
        scaleanchor: xAxisName,
    }),
);
