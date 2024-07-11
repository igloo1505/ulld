import { z } from "zod";
export declare const mathConfigSchema: z.ZodDefault<z.ZodObject<{
    latexPackages: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodLiteral<"all">]>>;
    latexFontUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined> | z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    latexPackages: (string[] | "all") & (string[] | "all" | undefined);
    latexFontUrl?: string | undefined;
}, {
    latexPackages?: string[] | "all" | undefined;
    latexFontUrl?: string | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map