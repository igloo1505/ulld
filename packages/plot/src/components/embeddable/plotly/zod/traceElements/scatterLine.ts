import { z } from "zod";
import { plotlyColorSchema, plotlyDashType } from "../general/utils";
import { plotlyScatterMarkerLineSchema } from "./scatterMarkerLine";

export const plotlyScatterLineSchema = z.object({
    color: plotlyColorSchema,
    width: z.number(),
    dash: plotlyDashType,
    shape: z.union([
        z.literal("linear"),
        z.literal("spline"),
        z.literal("hv"),
        z.literal("vh"),
        z.literal("hvh"),
        z.literal("vhv"),
    ]),
    smoothing: z.number(),
    simplify: z.boolean(),
    line: plotlyScatterMarkerLineSchema.partial()
});
