import { z } from 'zod';
export declare const readingListZodObject: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    bibEntries: z.ZodArray<z.ZodAny, "many">;
    mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string | null;
    bibEntries: any[];
    mdxNotes: any[];
    ipynbNotes: any[];
    createdAt: Date;
    lastUpdate: Date;
}, {
    name: string;
    description: string | null;
    bibEntries: any[];
    mdxNotes?: any[] | undefined;
    ipynbNotes?: any[] | undefined;
    createdAt?: string | Date | null | undefined;
    lastUpdate?: string | Date | null | undefined;
}>;
//# sourceMappingURL=classProps.d.ts.map