import { z } from "zod";

export const plotlyGridSchema = z.object({
    rows: z.number(),
    roworder: z.literal("top to bottom").or(z.literal("bottom to top")),
    columns: z.number(),
    subplots: z.string().array(),
    yaxes: z.string().array(),
    xaxes: z.string().array(),
    pattern: z.literal("independent").or(z.literal("coupled")),
    xgap: z.number(),
    ygap: z.number(),
    domain: z
        .object({
            x: z.number().array(),
            y: z.number().array(),
        })
        .partial(),
    xside: z.union([
        z.literal("bottom"),
        z.literal("bottom plot"),
        z.literal("top plot"),
        z.literal("top"),
    ]),
    yside: z.union([
        z.literal("left"),
        z.literal("left plot"),
        z.literal("right plot"),
        z.literal("right"),
    ]),
});
