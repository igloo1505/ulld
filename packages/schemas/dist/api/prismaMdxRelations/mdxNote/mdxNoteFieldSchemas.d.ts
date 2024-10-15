import { z } from 'zod';
export declare const sequentialListPropsSchema: z.ZodObject<{
    sequentialKey: z.ZodString;
    MdxNote: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    Ipynb: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    MdxNote: any[];
    Ipynb: any[];
    sequentialKey: string;
}, {
    sequentialKey: string;
    MdxNote?: any[] | undefined;
    Ipynb?: any[] | undefined;
}>;
//# sourceMappingURL=mdxNoteFieldSchemas.d.ts.map