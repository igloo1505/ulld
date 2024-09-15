import { z } from "zod";
import { plotlyAxisAnchor, plotlyAxisRef, plotlyFontSchema, plotlyPadding, plotlyTitlePosition } from "./utils";

export const plotlyTitleSchemaObject = z
    .object({
        text: z.string(),
        xref: plotlyAxisRef,
        yref: plotlyAxisRef,
        x: z.number(),
        y: z.number(),
        xanchor: plotlyAxisAnchor,
        yanchor: plotlyAxisAnchor,
        pad: plotlyPadding,
        padding: plotlyPadding,
    })
    .partial()
    .default({})
    .transform((x) => {
        if (x.padding && Object.keys(x.padding).length !== 0) {
            x.pad = {
                ...x.pad,
                ...x.padding,
            };
        }
        return x;
    });


export const plotlyDataTitleObjectSchema = z.object({
    text: z.string(),
    font: plotlyFontSchema.partial(),
    standoff: z.number(),
    position: plotlyTitlePosition
})
