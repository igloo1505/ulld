import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const tableUIConfigSchema: z.ZodDefault<z.ZodObject<{
    maxHeight: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, string, string | number | undefined>;
}, "strip", z.ZodTypeAny, {
    maxHeight: string;
}, {
    maxHeight?: string | number | undefined;
}>>;
export declare const tableUIConfigSchemaOutput: ZodOutputSchema<typeof tableUIConfigSchema>;
//# sourceMappingURL=tableConfig.d.ts.map