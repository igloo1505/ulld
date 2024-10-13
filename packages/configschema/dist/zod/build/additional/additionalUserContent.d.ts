import { z } from "zod";
export declare const additionalUserContent: z.ZodDefault<z.ZodObject<{
    css: z.ZodOptional<z.ZodString>;
    favicon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    logo: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    css?: string | undefined;
    logo?: string | undefined;
    favicon?: string | undefined;
}, {
    css?: string | undefined;
    logo?: string | undefined;
    favicon?: string | undefined;
}>>;
//# sourceMappingURL=additionalUserContent.d.ts.map