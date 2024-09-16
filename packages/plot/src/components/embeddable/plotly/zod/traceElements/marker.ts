import { z } from "zod";
import {
    plotlyColorScaleSchema,
    plotlyColorSchema,
    plotlyPadding,
} from "../general/utils";
import { numberOrNumberArraySchema } from "../general/nonspecificUtilities";
import { plotlyScatterMarkerLineSchema } from "./scatterMarkerLine";
import { plotlyPatternSchema } from "./pattern";
import { PlotMarker } from "plotly.js";
import { PlotMarkerHack } from "../../types/main";

export const markerSymbolSchema = z.union([
    z.string(),
    z.number(),
    z.union([z.number(), z.string()]).array(),
]);

export const plotlyMarkerSchema: z.ZodType<
    PlotMarkerHack
> = z.object({
    symbol: markerSymbolSchema,
    color: z.union([plotlyColorSchema, plotlyColorSchema.array()]).optional(),
    colors: plotlyColorSchema.array().optional(),
    colorscale: plotlyColorScaleSchema.optional(),
    cauto: z.boolean().optional(),
    cmax: z.number().optional(),
    cmin: z.number().optional(),
    autocolorscale: z.boolean().optional(),
    reversescale: z.boolean().optional(),
    opacity: numberOrNumberArraySchema,
    size: numberOrNumberArraySchema,
    maxdisplayed: z.number().optional(),
    sizeref: z.number().optional(),
    sizemax: z.number().optional(),
    sizemode: z.union([z.literal("diameter"), z.literal("area")]).optional(),
    showscale: z.boolean().optional(),
    line: plotlyScatterMarkerLineSchema.partial(),
    pad: plotlyPadding,
    width: z.number().optional(),
    // colorbar: ColorBar // TODO: handle this
    gradient: z
        .object({
            type: z.union([
                z.literal("radial"),
                z.literal("horizontal"),
                z.literal("vertical"),
                z.literal("none"),
            ]),
            color: plotlyColorSchema,
            typesrc: z.any().optional(),
            colorsrc: z.any().optional(),
        })
        .optional(),
    pattern: plotlyPatternSchema.partial(),
});

export const plotlyBoxPlotMarkerSchema = z.object({
    outliercolor: plotlyColorSchema,
    symbol: markerSymbolSchema,
    opacity: z.number(),
    size: z.number(),
    color: plotlyColorSchema,
    line: z
        .object({
            color: plotlyColorSchema,
            width: z.number(),
            outliercolor: plotlyColorSchema,
            outlierwidth: z.number(),
        })
        .partial(),
});
