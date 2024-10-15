import { z } from 'zod';
export declare const QuoteSchema: z.ZodObject<{
    body: z.ZodString;
    author: z.ZodString;
    source: z.ZodNullable<z.ZodString>;
    pinned: z.ZodBoolean;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    createdAt: Date;
    author: string;
    body: string;
    source: string | null;
    pinned: boolean;
}, {
    createdAt: Date;
    author: string;
    body: string;
    source: string | null;
    pinned: boolean;
}>;
export type Quote = z.infer<typeof QuoteSchema>;
export declare const QuotePartialSchema: z.ZodObject<{
    body: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    pinned: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    createdAt?: Date | undefined;
    author?: string | undefined;
    body?: string | undefined;
    source?: string | null | undefined;
    pinned?: boolean | undefined;
}, {
    createdAt?: Date | undefined;
    author?: string | undefined;
    body?: string | undefined;
    source?: string | null | undefined;
    pinned?: boolean | undefined;
}>;
export type QuotePartial = z.infer<typeof QuotePartialSchema>;
export default QuoteSchema;
//# sourceMappingURL=QuoteSchema.d.ts.map