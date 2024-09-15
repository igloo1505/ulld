import { z } from "zod";
import { plotlyFontSchema } from "../general/utils";

export const plotlyLabelSchema = z.object({
   bgcolor: z.string(),
    bordercolor: z.string(),
    font: plotlyFontSchema.partial()
})


export const plotlyHoverLabelSchema = z.object({
    align: z.union([
        z.literal("left"),
        z.literal("right"),
        z.literal("auto"),
    ]),
    namelength: z.number()
})
