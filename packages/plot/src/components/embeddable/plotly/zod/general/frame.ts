import { z } from "zod";
import { plotlyLayoutSchema } from "../3d/layout";
import { plotlyDataSchema } from "../dataHandling/plotlyData/plotlyData";

export const plotlyFrameSchema = z.object({
    group: z.string(),
    name: z.string(),
    traces: z.number().array(),
    baseframe: z.string(),
    data: plotlyDataSchema.array(),
    layout: plotlyLayoutSchema.partial(),
});
