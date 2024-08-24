import { z } from "zod";
export declare const mathConfigSchema: z.ZodDefault<z.ZodObject<{
    latexPackages: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodLiteral<"all">]>>;
    latexFontUrl: z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    constants: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    latexPackages: (string[] | "all") & (string[] | "all" | undefined);
    constants: Record<string, number>;
    latexFontUrl?: string | undefined;
}, {
    latexPackages?: string[] | "all" | undefined;
    latexFontUrl?: string | undefined;
    constants?: Record<string, number> | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map