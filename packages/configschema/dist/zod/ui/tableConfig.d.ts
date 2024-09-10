import { z } from "zod";
export declare const tableUIConfigSchema: z.ZodDefault<z.ZodObject<{
    maxHeight: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, string, string | number | undefined>;
}, "strip", z.ZodTypeAny, {
    maxHeight: string;
}, {
    maxHeight?: string | number | undefined;
}>>;
//# sourceMappingURL=tableConfig.d.ts.map