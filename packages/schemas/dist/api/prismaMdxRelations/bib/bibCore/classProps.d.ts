import { z } from 'zod';
export declare const bibCoreSchema: z.ZodObject<{
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    filename: z.ZodDefault<z.ZodString>;
    id: z.ZodDefault<z.ZodNumber>;
    entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    id: number;
    entries: any[];
    filename: string;
    firstSync?: Date | null | undefined;
    lastAccess?: Date | null | undefined;
}, {
    id?: number | undefined;
    entries?: any[] | undefined;
    firstSync?: string | Date | null | undefined;
    lastAccess?: string | Date | null | undefined;
    filename?: string | undefined;
}>;
//# sourceMappingURL=classProps.d.ts.map