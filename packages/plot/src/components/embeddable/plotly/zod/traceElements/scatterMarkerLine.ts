import { z } from "zod";
import { numberOrNumberArraySchema } from "../general/nonspecificUtilities";
import { plotlyColorScaleSchema, plotlyColorSchema } from "../general/utils";

export const plotlyScatterMarkerLineSchema = z.object({
   width: numberOrNumberArraySchema,
    color: plotlyColorSchema,
    cauto: z.boolean().optional(),
    cmin: z.number().optional(),
    cmax: z.number().optional(),
    cmid: z.number().optional(),
    colorscale: plotlyColorScaleSchema.optional(),
    autocolorscale: z.boolean().optional(),
    reversescale: z.boolean().optional(),
    coloraxis: z.string().optional(),
})
