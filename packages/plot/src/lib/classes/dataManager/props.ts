import { z } from "zod";

export const dataManager2dPropSchema = z.object({
    type: z.string().default("scatter"),
    mode: z.union([
        z.literal("lines"),
        z.literal("markers"),
        z.literal("lines+markers"),
        z.literal("lines+markers+text"),
        z.literal("none"),
    ]).default("lines"),
    hoverinfo: z.string().default("y")
});
