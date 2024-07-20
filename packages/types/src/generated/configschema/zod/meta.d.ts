import { z } from "zod";
export declare const appMetaSchema: z.ZodDefault<z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    desc?: string | undefined;
}, {
    title?: string | undefined;
    desc?: string | undefined;
}>>;
//# sourceMappingURL=meta.d.ts.map