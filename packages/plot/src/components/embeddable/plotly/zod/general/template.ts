import { z } from "zod";
import { plotlyLayoutSchema } from "../3d/layout";
import { allPlotlyPlotTypes } from "./utils";
import { plotlyPlotDataSchema } from "../dataHandling/plotlyData/plotData";

export const plotlyTemplateSchema = z.object({
   // layout: plotlyLayoutSchema.partial().optional(), // Had to remove this to properly infer types
    layout: z.any(),
    data: z.record(allPlotlyPlotTypes, plotlyPlotDataSchema.partial().array().optional())
})
