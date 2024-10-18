import { z } from "zod";

export const optionsSchemaInternal = z.object({
    showDate: z.boolean().default(true),
    label: z.string().optional(),
    color: z.string().optional(),
    component: z.string().optional(),
    type: z.union([
        z.literal("log"),
        z.literal("info"),
        z.literal("warn"),
        z.literal("error"),
        z.literal("table"),
    ]).default("log"),
});

export const optionsSchema = optionsSchemaInternal.default({});

export type LogOpts = z.input<typeof optionsSchema>;
export type LoggerOptionsSchema = z.input<typeof optionsSchema>;
export type LoggerOptionsSchemaOutput = z.output<typeof optionsSchema>;
