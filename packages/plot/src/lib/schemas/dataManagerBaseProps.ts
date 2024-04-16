import { z } from "zod";
import { twoDimensionalPlotTypes } from "./staticData";
import { plotTypeSchema } from "./plotTypeSchema";
import { plotlyMarkerSchema } from "./markerSchema";
import { colorScaleSchema } from "./colorSchema";
import { fontSchema } from "./fontSchema";
import { autoMarginSchema, autoRangeSchema, exponentFormatSchema } from "./generalPlotlySchemas";
import { internalPropState } from "./internalStateSchema";
import { layout2dSchema } from "./layoutSchema";


const xAxis = z.object({
    anchor: z.string().default("free"),
    automargin: z
        .union([autoMarginSchema, autoMarginSchema.array(), z.boolean()])
        .default(true)
        .transform((a) => {
            if (!Array.isArray(a)) {
                return a;
            }
            let s = "";
            a.forEach((b, i) => (s += i === a.length - 1 ? b : `${b}+`));
            return s;
        }),
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
    scaleanchor: z.string().optional(),
    scaleratio: z.number().min(0).default(1),
    tickfont: fontSchema.default({
        color: "hsl(var(--muted-foreground))",
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

const yAxis = xAxis.merge(z.object({}));

export const dataManagerBaseProps = z
    .object({
        type: plotTypeSchema.default("scatter"),
        visible: z.boolean().default(true),
        showLegend: z.boolean().default(true),
        legendrank: z.number().default(1000),
        legendgroup: z.string().default(""),
        opacity: z.number().min(0).max(1).default(1),
        hovertext: z.string().default(""),
        showscale: z.boolean().default(false),
        size: z.number().default(6),
        hoverinfo: z
            .union([
                z.literal("x"),
                z.literal("y"),
                z.literal("x+y"),
                z.literal("z"),
                z.literal("x+z"),
                z.literal("x+y+y"),
                z.literal("y+z"),
                z.literal("text"),
                z.literal("name"),
                z.literal("all"),
                z.literal("none"),
                z.literal("skip"),
            ])
            .default("all"),
        hovertemplate: z.string().default(""),
        xaxis: z.string().default("x"),
        yaxis: z.string().default("y"),
        orientation: z.union([z.literal("v"), z.literal("h")]).optional(),
        marker: plotlyMarkerSchema.default({}),
        textfont: fontSchema.default({
            color: "hsl(var(--primary))",
        }),
        selected: z
            .object({
                marker: z
                    .object({
                        color: z.string().optional(),
                        opacity: z.number().optional(),
                        size: z.number().optional(),
                    })
                    .default({}),
            })
            .default({}),
        unselected: z
            .object({
                marker: z
                    .object({
                        color: z.string().optional(),
                        opacity: z.number().optional(),
                        size: z.number().optional(),
                    })
                    .default({}),
            })
            .default({}),
        fillcolor: z.string().optional(),
        fillgradient: z
            .object({
                colorscale: colorScaleSchema.optional(),
                start: z.number().optional(),
                stop: z.number().optional(),
                type: z
                    .union([
                        z.literal("radial"),
                        z.literal("horizontal"),
                        z.literal("vertical"),
                        z.literal("none"),
                    ])
                    .optional(),
            })
            .default({}),
        hoverlabel: z
            .object({
                align: z
                    .union([z.literal("left"), z.literal("right"), z.literal("auto")])
                    .default("auto"),
                bgcolor: z
                    .union([colorScaleSchema, z.string()])
                    .default("hsl(var(--popover))"),
                font: fontSchema.default({
                    color: "hsl(var(--popover-foreground))",
                }),
            })
            .default({}),
        hoveron: z
            .union([
                z.literal("points"),
                z.literal("fills"),
                z.literal("points+fills"),
            ])
            .optional(),
        layout: layout2dSchema.default({}),
        xAxis: xAxis.default({}),
        yAxis: yAxis.default({}),
    })
    .merge(internalPropState)
    .default({})
    .transform((a) => {
        return {
            ...a,
            layout: {
                title: {
                    text: a.layout.title.text,
                    ...a.layout.title,
                },
                xaxis: {
                    ...a.xAxis,
                    showgrid: a.noGrid ? false : undefined,
                    nticks: a.xTicks || a.xAxis.nticks,
                    title: {
                        ...a.xAxis.title,
                        text: a.xAxis?.title?.text || a.xLabel,
                    },
                },
                yaxis: {
                    ...a.xAxis,
                    showgrid: a.noGrid ? false : undefined,
                    nticks: a.yTicks || a.yAxis.nticks,
                    title: {
                        ...a.yAxis.title,
                        text: a.yAxis?.title?.text || a.yLabel,
                    },
                    ...(a.cube && {
                        scaleanchor: "x",
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

export type DataManager2dPropInput = z.input<typeof dataManagerBaseProps>;
export type DataManager2dPropOutput = z.output<typeof dataManagerBaseProps>;
