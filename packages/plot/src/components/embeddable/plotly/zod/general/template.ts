import { z } from "zod";
import { plotlyLayoutSchema } from "../3d/layout";
import { allPlotlyPlotTypes } from "./utils";

export const plotlyTemplateSchema = z.object({
   layout: plotlyLayoutSchema.partial().optional(),
    data: z.record(allPlotlyPlotTypes, plotlyPlotDataSchema.partial().array().optional())
})
