import { z } from "zod";
export declare const dictionaryDefinitionReturnType: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodEffects<z.ZodNullable<z.ZodString>, {
        parsed: string;
        original: string;
    } | undefined, string | null>;
    content: z.ZodEffects<z.ZodNullable<z.ZodString>, {
        parsed: string;
        original: string;
    } | undefined, string | null>;
    mdxNoteId: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    mdxNoteId: number | null;
    label?: {
        parsed: string;
        original: string;
    } | undefined;
    content?: {
        parsed: string;
        original: string;
    } | undefined;
}, {
    id: string;
    label: string | null;
    content: string | null;
    mdxNoteId: number | null;
}>;
export type DictionaryDefinitionReturnType = z.output<typeof dictionaryDefinitionReturnType>;
//# sourceMappingURL=main.d.ts.map