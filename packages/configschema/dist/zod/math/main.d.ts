import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const mathConfigSchema: z.ZodDefault<z.ZodObject<{
    latexPackages: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodLiteral<"all">]>>;
    latexFontUrl: z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    constants: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    latexPackages: string[] | "all";
    constants: Record<string, number>;
    latexFontUrl?: string | undefined;
}, {
    latexPackages?: string[] | "all" | undefined;
    latexFontUrl?: string | undefined;
    constants?: Record<string, number> | undefined;
}>>;
export declare const mathConfigSchemaOutput: ZodOutputSchema<typeof mathConfigSchema>;
//# sourceMappingURL=main.d.ts.map