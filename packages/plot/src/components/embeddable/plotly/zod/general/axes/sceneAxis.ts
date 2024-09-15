import { z } from "zod";
import { plotlyColorSchema } from "../utils";
import { plotlyAxisSchema } from "./plotlyAxis";

const _plotlySceneAxis = z.object({
    spikesides: z.boolean(),
    showbackground: z.boolean(),
    backgroundcolor: plotlyColorSchema,
    showaxeslabels: z.boolean()
})


export const plotlySceneAxis = plotlyAxisSchema.merge(_plotlySceneAxis)
