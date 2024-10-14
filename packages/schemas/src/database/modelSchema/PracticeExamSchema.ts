import { z } from 'zod';
import type { TopicWithRelations } from './TopicSchema'
import type { TopicPartialWithRelations } from './TopicSchema'
import type { TagWithRelations } from './TagSchema'
import type { TagPartialWithRelations } from './TagSchema'
import type { SubjectWithRelations } from './SubjectSchema'
import type { SubjectPartialWithRelations } from './SubjectSchema'
import type { QAPairWithRelations } from './QAPairSchema'
import type { QAPairPartialWithRelations } from './QAPairSchema'
import { TopicWithRelationsSchema } from './TopicSchema'
import { TopicPartialWithRelationsSchema } from './TopicSchema'
import { TagWithRelationsSchema } from './TagSchema'
import { TagPartialWithRelationsSchema } from './TagSchema'
import { SubjectWithRelationsSchema } from './SubjectSchema'
import { SubjectPartialWithRelationsSchema } from './SubjectSchema'
import { QAPairWithRelationsSchema } from './QAPairSchema'
import { QAPairPartialWithRelationsSchema } from './QAPairSchema'

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
})

export type PracticeExam = z.infer<typeof PracticeExamSchema>

/////////////////////////////////////////
// PRACTICE EXAM PARTIAL SCHEMA
/////////////////////////////////////////

export const PracticeExamPartialSchema = PracticeExamSchema.partial()

export type PracticeExamPartial = z.infer<typeof PracticeExamPartialSchema>

/////////////////////////////////////////
// PRACTICE EXAM RELATION SCHEMA
/////////////////////////////////////////

export type PracticeExamRelations = {
  topics: TopicWithRelations[];
  tags: TagWithRelations[];
  subjects: SubjectWithRelations[];
  questions: QAPairWithRelations[];
};

export type PracticeExamWithRelations = z.infer<typeof PracticeExamSchema> & PracticeExamRelations

export const PracticeExamWithRelationsSchema: z.ZodType<PracticeExamWithRelations> = PracticeExamSchema.merge(z.object({
  topics: z.lazy(() => TopicWithRelationsSchema).array(),
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  questions: z.lazy(() => QAPairWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PRACTICE EXAM PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PracticeExamPartialRelations = {
  topics?: TopicPartialWithRelations[];
  tags?: TagPartialWithRelations[];
  subjects?: SubjectPartialWithRelations[];
  questions?: QAPairPartialWithRelations[];
};

export type PracticeExamPartialWithRelations = z.infer<typeof PracticeExamPartialSchema> & PracticeExamPartialRelations

export const PracticeExamPartialWithRelationsSchema: z.ZodType<PracticeExamPartialWithRelations> = PracticeExamPartialSchema.merge(z.object({
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  questions: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
})).partial()

export type PracticeExamWithPartialRelations = z.infer<typeof PracticeExamSchema> & PracticeExamPartialRelations

export const PracticeExamWithPartialRelationsSchema: z.ZodType<PracticeExamWithPartialRelations> = PracticeExamSchema.merge(z.object({
  topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  questions: z.lazy(() => QAPairPartialWithRelationsSchema).array(),
}).partial())

export default PracticeExamSchema;
