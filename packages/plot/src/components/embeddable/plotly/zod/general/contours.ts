import { z } from "zod";
import { plotlyFontSchema } from "./utils";

export const plotlyContoursSchema = z.object({
    coloring: z.union([
        z.literal("fill"),
        z.literal("heatmap"),
        z.literal("lines"),
        z.literal("none"),
    ]),
    end: z.number(),
    labelfont: plotlyFontSchema.partial(),
    operation: z.union([
        z.literal("="),
        z.literal("<"),
        z.literal(">="),
        z.literal(">"),
        z.literal("<="),
        z.literal("[]"),
        z.literal("()"),
        z.literal("[)"),
        z.literal("(]"),
        z.literal("]["),
        z.literal(")("),
        z.literal("]("),
        z.literal(")["),
    ]),
    showlabels: z.boolean(),
    showlines: z.boolean(),
    size: z.number(),
    start: z.number(),
    type: z.union([
        z.literal("levels"),
        z.literal("constraint"),
    ]),
    value: z.union([
        z.number(),
        z.tuple([z.number(), z.number()])
    ])
});
