import { z } from 'zod';
export declare const SnippetSchema: z.ZodObject<{
    id: z.ZodNumber;
    content: z.ZodString;
    description: z.ZodString;
    keywords: z.ZodArray<z.ZodString, "many">;
    language: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    description: string;
    createdAt: Date;
    keywords: string[];
    content: string;
    language: string;
}, {
    id: number;
    description: string;
    createdAt: Date;
    keywords: string[];
    content: string;
    language: string;
}>;
export type Snippet = z.infer<typeof SnippetSchema>;
export declare const SnippetPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    content: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    language: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    keywords?: string[] | undefined;
    content?: string | undefined;
    language?: string | undefined;
}, {
    id?: number | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    keywords?: string[] | undefined;
    content?: string | undefined;
    language?: string | undefined;
}>;
export type SnippetPartial = z.infer<typeof SnippetPartialSchema>;
export default SnippetSchema;
//# sourceMappingURL=SnippetSchema.d.ts.map