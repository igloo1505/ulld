import { z } from "zod";

export const plotlyPatternSchema = z.object({
    shape: z.union([
        z.literal(""),
        z.literal("/"),
        z.literal("\\"),
        z.literal("x"),
        z.literal("-"),
        z.literal("|"),
        z.literal("+"),
        z.literal("."),
    ]).optional(),
    fillmode: z.union([
        z.literal("replace"),
        z.literal("overlay"),
    ]).optional(),
    bgcolor: z.string().optional(),
    fgcolor: z.string().optional(),
    fgopacity: z.string().optional(),
    size: z.number().optional(),
    solidity: z.number().optional(),
});
