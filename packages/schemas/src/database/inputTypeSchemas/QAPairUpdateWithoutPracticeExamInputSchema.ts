import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { TagUpdateManyWithoutQAPairNestedInputSchema } from './TagUpdateManyWithoutQAPairNestedInputSchema.js';
import { TopicUpdateManyWithoutQAPairNestedInputSchema } from './TopicUpdateManyWithoutQAPairNestedInputSchema.js';
import { SubjectUpdateManyWithoutQaPairNestedInputSchema } from './SubjectUpdateManyWithoutQaPairNestedInputSchema.js';
export const QAPairUpdateWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUpdateWithoutPracticeExamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  question: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  secondaryLabel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  correctCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inCorrectCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutQAPairNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutQAPairNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutQaPairNestedInputSchema).optional()
}).strict();
export default QAPairUpdateWithoutPracticeExamInputSchema;