import { z } from "zod";
import { plotlyHoverLabelSchema, plotlyLabelSchema } from "../interaction/hoverLabel";
import { plotlyXAxisName, plotlyYAxisName } from "./utils";
import { numberStringUnionSchema } from "./nonspecificUtilities";

const _plotlyAnnotationsSchema = z.object({
    visible: z.boolean(),
    text: z.string(),
    textangle: z.string(),
    width: z.number(),
    height: z.number(),
    opacity: z.number(),
    align: z.union([z.literal("left"), z.literal("center"), z.literal("right")]),
    valign: z.union([z.literal("top"), z.literal("middle"), z.literal("bottom")]),
    borderpad: z.number(),
    borderwidth: z.number(),
    showarrow: z.boolean(),
    arrowcolor: z.string(),
    arrowhead: z.number(),
    startarrowhead: z.number(),
    arrowside: z.literal("end").or(z.literal("start")),
    arrowsize: z.number(),
    startarrowsize: z.number(),
    arrowwidth: z.number(),
    standoff: z.number(),
    startstandoff: z.number(),
    ax: z.number(),
    ay: z.number(),
    axref: plotlyXAxisName.or(z.literal("pixel")),
    ayref: plotlyYAxisName.or(z.literal("pixel")),
    xref: plotlyXAxisName.or(z.literal("paper")),
    x: numberStringUnionSchema,
    xanchor: z.union([
        z.literal("auto"),
        z.literal("left"),
        z.literal("center"),
        z.literal("right"),
    ]),
    xshift: z.number(),
    yref: plotlyXAxisName.or(z.literal("paper")),
    y: numberStringUnionSchema,
    yanchor: z.union([
        z.literal("auto"),
        z.literal("left"),
        z.literal("center"),
        z.literal("right"),
    ]),
    yshift: z.number(),
    clicktoshow: z.union([
        z.literal(false),
        z.literal("onoff"),
        z.literal("onout"),
    ]),
    xclick: z.any(),
    yclick: z.any(),
    hovertext: z.string(),
    hoverlabel: plotlyHoverLabelSchema.partial(),
    captureevents: z.boolean()
});

export const plotlyAnnotationsSchema = plotlyLabelSchema.merge(
    _plotlyAnnotationsSchema,
);
