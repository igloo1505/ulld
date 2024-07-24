import { z } from 'zod';
export declare const tagTopicSubjectList: z.ZodObject<{
    tags: z.ZodArray<z.ZodString, "many">;
    subjects: z.ZodArray<z.ZodString, "many">;
    topics: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    topics: string[];
    subjects: string[];
}, {
    tags: string[];
    topics: string[];
    subjects: string[];
}>;
export type TagTopicSubjectList = z.infer<typeof tagTopicSubjectList>;
//# sourceMappingURL=tagTopicSubjectList.d.ts.map