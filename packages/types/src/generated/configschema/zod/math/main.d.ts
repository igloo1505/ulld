import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const mathConfigSchema: z.ZodDefault<z.ZodObject<{
    latexPackages: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodLiteral<"all">]>>;
    latexFontUrl: z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    constants: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    latexPackages?: string[] | "all";
    latexFontUrl?: string;
    constants?: Record<string, number>;
}, {
    latexPackages?: string[] | "all";
    latexFontUrl?: string;
    constants?: Record<string, number>;
}>>;
export declare const mathConfigSchemaOutput: ZodOutputSchema<typeof mathConfigSchema>;
