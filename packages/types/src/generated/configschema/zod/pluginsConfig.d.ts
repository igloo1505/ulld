import { z } from "zod";
import { ZodOutputSchema } from "../types.js";
export declare const pluginItemSchema: z.ZodObject<{
    name: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
    parserIndex: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    version?: string;
    parserIndex?: number;
}, {
    name?: string;
    version?: string;
    parserIndex?: number;
}>;
export declare const pluginItemSchemaOutput: ZodOutputSchema<typeof pluginItemSchema>;
export declare const pluginsConfigSchema: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodObject<{
    name: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
    parserIndex: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    version?: string;
    parserIndex?: number;
}, {
    name?: string;
    version?: string;
    parserIndex?: number;
}>, z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
    parserIndex: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    version?: string;
    parserIndex?: number;
}, {
    name?: string;
    version?: string;
    parserIndex?: number;
}>, "many">, z.ZodString, z.ZodArray<z.ZodString, "many">]>>, {
    name?: string;
    version?: string;
    parserIndex?: number;
}[], string | string[] | {
    name?: string;
    version?: string;
    parserIndex?: number;
} | {
    name?: string;
    version?: string;
    parserIndex?: number;
}[]>;
export declare const pluginsConfigSchemaOutput: ZodOutputSchema<typeof pluginsConfigSchema>;
