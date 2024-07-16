import { z } from "zod";
export declare const databaseConfigSchema: z.ZodDefault<z.ZodObject<{
    storeFormatted: z.ZodDefault<z.ZodBoolean>;
    removeIfNotPresentInFs: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    storeFormatted: boolean;
    removeIfNotPresentInFs: boolean;
}, {
    storeFormatted?: boolean | undefined;
    removeIfNotPresentInFs?: boolean | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map