import { z } from "zod";
import { plotlyLayoutAxisPropSchema } from "../general/axes/layoutAxis";
import { plotlyTitleSchema } from "../general/main";
import { plotlyColorSchema, plotlyFontSchema } from "../general/utils";


export const plotly3dLayoutSchema = z.object({
    aspectmode: z.union([
        z.literal("manual"),
        z.literal("data"),
        z.literal("cube"),
    ]).default("data"),
    yaxis: plotlyLayoutAxisPropSchema.partial().default({}),
    xaxis: plotlyLayoutAxisPropSchema.partial().default({}),
    zaxis: plotlyLayoutAxisPropSchema.partial().default({}),
    colorway: z.string().array().optional(),
    title: plotlyTitleSchema,
    titlefont: plotlyFontSchema,
    autosize: z.boolean(),
    showlegend: z.boolean(),
    paper_bgcolor: plotlyColorSchema.default("hsl(var(--background))"),
    plot_bgcolor: plotlyColorSchema.default("hsl(var(--secondary)/0.25)"),
    separators: z.string(),
    hidesources: z.boolean()
})
