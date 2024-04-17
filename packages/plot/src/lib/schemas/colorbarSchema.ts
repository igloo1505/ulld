import { z } from "zod";
import { exponentFormatSchema } from "./generalPlotlySchemas";
import { fontSchema, fontSchemaRequired, fontSchemaWithSize } from "./fontSchema";

export const colorbarSchema = z.object({
    bgcolor: z.string().default("hsl(var(--card))"),
    bordercolor: z.string().default("hsl(var(--border))"),
    borderwidth: z.number().default(0),
    title: z.string().optional(),
    exponentformat: exponentFormatSchema.default("power"),
    nticks: z.number().default(0),
    orientation: z.union([z.literal("v"), z.literal("h")]).default("v"),
    outlinecolor: z.string().default("hsl(var(--border))"),
    outlinewidth: z.number().default(1),
    seperatethousands: z.boolean().default(true),
    thickness: z.number().default(30),
    thicknessmode: z
        .union([z.literal("fraction"), z.literal("pixels")])
        .default("pixels"),
    tickfont: fontSchemaRequired.optional(),
});
