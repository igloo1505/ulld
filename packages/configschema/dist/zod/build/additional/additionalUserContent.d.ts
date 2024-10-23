import { z } from "zod";
import { ZodOutputSchema } from "../../../types.js";
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
export declare const additionalUserContentOutput: ZodOutputSchema<typeof additionalUserContent>;
//# sourceMappingURL=additionalUserContent.d.ts.map