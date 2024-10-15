import { z } from 'zod';
import type { TopicWithRelations } from './TopicSchema.js';
import type { TopicPartialWithRelations } from './TopicSchema.js';
import type { TagWithRelations } from './TagSchema.js';
import type { TagPartialWithRelations } from './TagSchema.js';
import type { SubjectWithRelations } from './SubjectSchema.js';
import type { SubjectPartialWithRelations } from './SubjectSchema.js';
import type { QAPairWithRelations } from './QAPairSchema.js';
import type { QAPairPartialWithRelations } from './QAPairSchema.js';
export declare const PracticeExamSchema: z.ZodObject<{
    id: z.ZodNumber;
    correctCount: z.ZodNumber;
    inCorrectCount: z.ZodNumber;
    timeLimitInSeconds: z.ZodNumber;
    timeCompletedInSeconds: z.ZodNumber;
    date: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    date: Date;
    id: number;
    correctCount: number;
    inCorrectCount: number;
    timeLimitInSeconds: number;
    timeCompletedInSeconds: number;
}, {
    date: Date;
    id: number;
    correctCount: number;
    inCorrectCount: number;
    timeLimitInSeconds: number;
    timeCompletedInSeconds: number;
}>;
export type PracticeExam = z.infer<typeof PracticeExamSchema>;
export declare const PracticeExamPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    correctCount: z.ZodOptional<z.ZodNumber>;
    inCorrectCount: z.ZodOptional<z.ZodNumber>;
    timeLimitInSeconds: z.ZodOptional<z.ZodNumber>;
    timeCompletedInSeconds: z.ZodOptional<z.ZodNumber>;
    date: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    date?: Date | undefined;
    id?: number | undefined;
    correctCount?: number | undefined;
    inCorrectCount?: number | undefined;
    timeLimitInSeconds?: number | undefined;
    timeCompletedInSeconds?: number | undefined;
}, {
    date?: Date | undefined;
    id?: number | undefined;
    correctCount?: number | undefined;
    inCorrectCount?: number | undefined;
    timeLimitInSeconds?: number | undefined;
    timeCompletedInSeconds?: number | undefined;
}>;
export type PracticeExamPartial = z.infer<typeof PracticeExamPartialSchema>;
export type PracticeExamRelations = {
    topics: TopicWithRelations[];
    tags: TagWithRelations[];
    subjects: SubjectWithRelations[];
    questions: QAPairWithRelations[];
};
export type PracticeExamWithRelations = z.infer<typeof PracticeExamSchema> & PracticeExamRelations;
export declare const PracticeExamWithRelationsSchema: z.ZodType<PracticeExamWithRelations>;
export type PracticeExamPartialRelations = {
    topics?: TopicPartialWithRelations[];
    tags?: TagPartialWithRelations[];
    subjects?: SubjectPartialWithRelations[];
    questions?: QAPairPartialWithRelations[];
};
export type PracticeExamPartialWithRelations = z.infer<typeof PracticeExamPartialSchema> & PracticeExamPartialRelations;
export declare const PracticeExamPartialWithRelationsSchema: z.ZodType<PracticeExamPartialWithRelations>;
export type PracticeExamWithPartialRelations = z.infer<typeof PracticeExamSchema> & PracticeExamPartialRelations;
export declare const PracticeExamWithPartialRelationsSchema: z.ZodType<PracticeExamWithPartialRelations>;
export default PracticeExamSchema;
//# sourceMappingURL=PracticeExamSchema.d.ts.map