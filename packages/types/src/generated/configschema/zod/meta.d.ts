import { z } from "zod";
import { ZodOutputSchema } from "../types.js";
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
export declare const appMetaSchemaOutput: ZodOutputSchema<typeof appMetaSchema>;
//# sourceMappingURL=meta.d.ts.map