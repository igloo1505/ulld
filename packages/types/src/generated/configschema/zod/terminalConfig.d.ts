import { z } from 'zod';
import { ZodOutputSchema } from '../types.js';
export declare const terminalConfigSchema: z.ZodDefault<z.ZodObject<{
    logLevel: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"debug">, z.ZodLiteral<"verbose">, z.ZodLiteral<"info">, z.ZodLiteral<"none">]>>;
}, "strip", z.ZodTypeAny, {
    logLevel?: "info" | "none" | "debug" | "verbose";
}, {
    logLevel?: "info" | "none" | "debug" | "verbose";
}>>;
export declare const terminalConfigSchemaOutput: ZodOutputSchema<typeof terminalConfigSchema>;
