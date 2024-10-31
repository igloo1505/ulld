import { z } from "zod";
import { ZodOutputSchema } from "../types.js";
export declare const appMetaSchema: z.ZodDefault<z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string;
    desc?: string;
}, {
    title?: string;
    desc?: string;
}>>;
export declare const appMetaSchemaOutput: ZodOutputSchema<typeof appMetaSchema>;
