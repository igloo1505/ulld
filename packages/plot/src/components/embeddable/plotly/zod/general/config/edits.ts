import { z } from "zod";

export const plotlyEditsSchema = z.object({
    annotationPosition: z.boolean(),
    annotationTail: z.boolean(),
    annotationText: z.boolean(),
    axisTitleText: z.boolean(),
    colorbarPosition: z.boolean(),
    colorbarTitleText: z.boolean(),
    legendPosition: z.boolean(),
    legendText: z.boolean(),
    shapePosition: z.boolean(),
    titleText: z.boolean(),
});
