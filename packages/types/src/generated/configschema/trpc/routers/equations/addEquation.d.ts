import { z } from "zod";
export declare const addEquationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    title: z.ZodString;
    desc: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
    equationId: z.ZodOptional<z.ZodString>;
    asPython: z.ZodOptional<z.ZodString>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    tagInput: z.ZodString;
    relatedValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodRecord<z.ZodString, z.ZodNumber>;
        output: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        input: Record<string, number>;
        output: number;
    }, {
        input: Record<string, number>;
        output: number;
    }>, "many">>;
    variables: z.ZodArray<z.ZodString, "many">;
    variableInput: z.ZodString;
    keywords: z.ZodArray<z.ZodString, "many">;
    keywordInput: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    keywords: string[];
    title: string;
    content: string;
    variables: string[];
    tagInput: string;
    variableInput: string;
    keywordInput: string;
    id?: number | undefined;
    desc?: string | undefined;
    equationId?: string | undefined;
    asPython?: string | undefined;
    relatedValues?: {
        input: Record<string, number>;
        output: number;
    }[] | undefined;
}, {
    keywords: string[];
    title: string;
    content: string;
    variables: string[];
    tagInput: string;
    variableInput: string;
    keywordInput: string;
    id?: number | undefined;
    desc?: string | undefined;
    equationId?: string | undefined;
    asPython?: string | undefined;
    tags?: string[] | undefined;
    relatedValues?: {
        input: Record<string, number>;
        output: number;
    }[] | undefined;
}>;
//# sourceMappingURL=addEquation.d.ts.map