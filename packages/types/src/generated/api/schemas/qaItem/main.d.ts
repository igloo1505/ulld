import { z } from "zod";
import { serverClient } from "../../trpc/serverClient";
export declare const qaInputSchema: z.ZodObject<{
    question: z.ZodString;
    answer: z.ZodString;
    description: z.ZodString;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    topics: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    subjects: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    topics: string[];
    subjects: string[];
    question: string;
    answer: string;
    description: string;
    id?: string | undefined;
}, {
    question: string;
    answer: string;
    description: string;
    tags?: string[] | undefined;
    topics?: string[] | undefined;
    subjects?: string[] | undefined;
    id?: string | undefined;
}>;
export declare const qaInputSchemaTrpc: z.ZodObject<{
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    id: z.ZodOptional<z.ZodString>;
    topics: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    subjects: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    question: z.ZodString;
    answer: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    topics: string[];
    subjects: string[];
    question: string;
    answer: string;
    id?: string | undefined;
    description?: string | undefined;
}, {
    question: string;
    answer: string;
    tags?: string[] | undefined;
    id?: string | undefined;
    topics?: string[] | undefined;
    subjects?: string[] | undefined;
    description?: string | undefined;
}>;
export type QAPairInput = z.input<typeof qaInputSchema>;
export type QAPairOutput = z.output<typeof qaInputSchema>;
export type FlipCardReturnItem = Awaited<ReturnType<typeof serverClient.qa.getSpecificQA>>;
//# sourceMappingURL=main.d.ts.map