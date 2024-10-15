import { z } from 'zod';
import type { TagWithRelations } from './TagSchema.js';
import type { TagPartialWithRelations } from './TagSchema.js';
import type { TopicWithRelations } from './TopicSchema.js';
import type { TopicPartialWithRelations } from './TopicSchema.js';
import type { SubjectWithRelations } from './SubjectSchema.js';
import type { SubjectPartialWithRelations } from './SubjectSchema.js';
import type { PracticeExamWithRelations } from './PracticeExamSchema.js';
import type { PracticeExamPartialWithRelations } from './PracticeExamSchema.js';
export declare const QAPairSchema: z.ZodObject<{
    id: z.ZodString;
    question: z.ZodString;
    answer: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    secondaryLabel: z.ZodNullable<z.ZodString>;
    correctCount: z.ZodNumber;
    inCorrectCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string | null;
    correctCount: number;
    inCorrectCount: number;
    question: string;
    answer: string;
    secondaryLabel: string | null;
}, {
    id: string;
    description: string | null;
    correctCount: number;
    inCorrectCount: number;
    question: string;
    answer: string;
    secondaryLabel: string | null;
}>;
export type QAPair = z.infer<typeof QAPairSchema>;
export declare const QAPairPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    question: z.ZodOptional<z.ZodString>;
    answer: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secondaryLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    correctCount: z.ZodOptional<z.ZodNumber>;
    inCorrectCount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    description?: string | null | undefined;
    correctCount?: number | undefined;
    inCorrectCount?: number | undefined;
    question?: string | undefined;
    answer?: string | undefined;
    secondaryLabel?: string | null | undefined;
}, {
    id?: string | undefined;
    description?: string | null | undefined;
    correctCount?: number | undefined;
    inCorrectCount?: number | undefined;
    question?: string | undefined;
    answer?: string | undefined;
    secondaryLabel?: string | null | undefined;
}>;
export type QAPairPartial = z.infer<typeof QAPairPartialSchema>;
export type QAPairRelations = {
    tags: TagWithRelations[];
    topics: TopicWithRelations[];
    subjects: SubjectWithRelations[];
    practiceExam: PracticeExamWithRelations[];
};
export type QAPairWithRelations = z.infer<typeof QAPairSchema> & QAPairRelations;
export declare const QAPairWithRelationsSchema: z.ZodType<QAPairWithRelations>;
export type QAPairPartialRelations = {
    tags?: TagPartialWithRelations[];
    topics?: TopicPartialWithRelations[];
    subjects?: SubjectPartialWithRelations[];
    practiceExam?: PracticeExamPartialWithRelations[];
};
export type QAPairPartialWithRelations = z.infer<typeof QAPairPartialSchema> & QAPairPartialRelations;
export declare const QAPairPartialWithRelationsSchema: z.ZodType<QAPairPartialWithRelations>;
export type QAPairWithPartialRelations = z.infer<typeof QAPairSchema> & QAPairPartialRelations;
export declare const QAPairWithPartialRelationsSchema: z.ZodType<QAPairWithPartialRelations>;
export default QAPairSchema;
//# sourceMappingURL=QAPairSchema.d.ts.map