import { z } from 'zod';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
import { PracticeExamWithRelationsSchema } from './PracticeExamSchema.js';
import { PracticeExamPartialWithRelationsSchema } from './PracticeExamSchema.js';
/////////////////////////////////////////
// QA PAIR SCHEMA
/////////////////////////////////////////
export const QAPairSchema = z.object({
    id: z.string(),
    question: z.string(),
    answer: z.string(),
    description: z.string().nullable(),
    secondaryLabel: z.string().nullable(),
    correctCount: z.number().int(),
    inCorrectCount: z.number().int(),
});
/////////////////////////////////////////
// QA PAIR PARTIAL SCHEMA
/////////////////////////////////////////
export const QAPairPartialSchema = QAPairSchema.partial();
export const QAPairWithRelationsSchema = QAPairSchema.merge(z.object({
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamWithRelationsSchema).array(),
}));
export const QAPairPartialWithRelationsSchema = QAPairPartialSchema.merge(z.object({
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
})).partial();
export const QAPairWithPartialRelationsSchema = QAPairSchema.merge(z.object({
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    practiceExam: z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
}).partial());
export default QAPairSchema;
