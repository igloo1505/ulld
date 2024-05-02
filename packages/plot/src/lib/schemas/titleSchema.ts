import { z } from "zod";
import { fontSchema } from "./fontSchema";

export const dataTitleSchema = z.object({
    text: z.string().optional(),
    font: fontSchema.default({}),
    standoff: z.number().optional(),
    position: z.union([
        z.literal("top left"),
        z.literal("top center"),
        z.literal("top right"),
        z.literal("middle center"),
        z.literal("bottom left"),
        z.literal("bottom center"),
        z.literal("bottom right"),
    ]),
});
