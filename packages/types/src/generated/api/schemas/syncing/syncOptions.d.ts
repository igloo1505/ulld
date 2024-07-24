import { z } from "zod";
export declare const syncOptionsSchema: z.ZodObject<{
    offline: z.ZodOptional<z.ZodBoolean>;
    removeIfNotInFs: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    cleanBeforeSync: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    offline?: boolean | undefined;
    removeIfNotInFs?: boolean | null | undefined;
    cleanBeforeSync?: boolean | undefined;
}, {
    offline?: boolean | undefined;
    removeIfNotInFs?: boolean | null | undefined;
    cleanBeforeSync?: boolean | undefined;
}>;
export type SyncOptions = z.infer<typeof syncOptionsSchema>;
//# sourceMappingURL=syncOptions.d.ts.map