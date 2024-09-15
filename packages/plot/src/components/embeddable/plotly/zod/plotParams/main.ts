import { z } from "zod";
import { plotlyDataSchema } from "../dataHandling/plotlyData/plotlyData";
import { plotlyLayoutSchema } from "../3d/layout";
import { plotlyFrameSchema } from "../general/frame";
import { plotlyConfigSchema } from "../general/config/config";

export const plotlyPlotParamsSchema = z.object({
    data: z.union([
        plotlyDataSchema,
        plotlyDataSchema.array()
    ]).transform((x) => Array.isArray(x) ? x : [x]),
    layout: plotlyLayoutSchema.partial(),
    frames: plotlyFrameSchema.array().optional(),
    config: plotlyConfigSchema.partial().optional(),
    revision: z.number().optional(),
    divId: z.string().optional(),
    className: z.string().optional(),
    style: z.record(z.string(), z.any()).optional(),
    debug: z.boolean().optional(),
    useResizeHandler: z.boolean().optional()
})
