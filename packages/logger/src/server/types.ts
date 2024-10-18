import { z } from "zod";
import { optionsSchemaInternal as clientOptionsSchema } from "../client/types";

export const optionsSchema = z
    .object({
        contentSyntaxType: z.string().optional(),
        disable: z.boolean().default(false),
    })
    .merge(clientOptionsSchema)
    .default({});

export type LogOpts = z.input<typeof optionsSchema>;
export type LoggerOptionsSchema = z.input<typeof optionsSchema>;
export type LoggerOptionsSchemaOutput = z.output<typeof optionsSchema>;
