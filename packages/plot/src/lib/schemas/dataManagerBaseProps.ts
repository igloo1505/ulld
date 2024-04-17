import { z } from "zod";
import { plotTypeSchema } from "./plotTypeSchema";
import { plotlyMarkerSchema } from "./markerSchema";
import { colorScaleSchema } from "./colorSchema";
import { fontSchema } from "./fontSchema";
import { layout2dSchema } from "./layoutSchema";
import { xAxis, yAxis } from "./axis";



export const dataManagerBaseProps = z
    .object({
        type: plotTypeSchema.default("scatter"),
        visible: z.boolean().default(true),
        showLegend: z.boolean().default(true),
        legendrank: z.number().default(1000),
        legendgroup: z.string().default(""),
        opacity: z.number().min(0).max(1).default(1),
        hovertext: z.string().default(""),
        showscale: z.boolean().optional(),
        size: z.number().optional(),
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
                    .optional(),
            })
            .optional(),
        unselected: z
            .object({
                marker: z
                    .object({
                        color: z.string().optional(),
                        opacity: z.number().optional(),
                        size: z.number().optional(),
                    })
                    .optional(),
            })
            .optional(),
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


