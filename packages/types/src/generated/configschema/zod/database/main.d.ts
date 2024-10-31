import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const databaseConfigSchema: z.ZodDefault<z.ZodObject<{
    storeFormatted: z.ZodDefault<z.ZodBoolean>;
    removeIfNotPresentInFs: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    storeFormatted?: boolean;
    removeIfNotPresentInFs?: boolean;
}, {
    storeFormatted?: boolean;
    removeIfNotPresentInFs?: boolean;
}>>;
export declare const databaseConfigSchemaOutput: ZodOutputSchema<typeof databaseConfigSchema>;
