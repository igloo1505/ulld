import { z } from 'zod';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
import { QAPairWithRelationsSchema } from './QAPairSchema.js';
import { QAPairPartialWithRelationsSchema } from './QAPairSchema.js';
/////////////////////////////////////////
// PRACTICE EXAM SCHEMA
/////////////////////////////////////////
export const PracticeExamSchema = z.object({
    id: z.number().int(),
    correctCount: z.number().int(),
    inCorrectCount: z.number().int(),
    timeLimitInSeconds: z.number().int(),
    timeCompletedInSeconds: z.number().int(),
    date: z.coerce.date(),
});
/////////////////////////////////////////
// PRACTICE EXAM PARTIAL SCHEMA
/////////////////////////////////////////
export const PracticeExamPartialSchema = PracticeExamSchema.partial();
export const PracticeExamWithRelationsSchema = PracticeExamSchema.merge(z.object({
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
    questions: z.lazy(() => QAPairWithRelationsSchema).array(),
}));
export const PracticeExamPartialWithRelationsSchema = PracticeExamPartialSchema.merge(z.object({
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    questions: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
})).partial();
export const PracticeExamWithPartialRelationsSchema = PracticeExamSchema.merge(z.object({
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    questions: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
}).partial());
export default PracticeExamSchema;
