import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TagUpdateManyWithoutQAPairNestedInputSchema } from './TagUpdateManyWithoutQAPairNestedInputSchema';
import { TopicUpdateManyWithoutQAPairNestedInputSchema } from './TopicUpdateManyWithoutQAPairNestedInputSchema';
import { SubjectUpdateManyWithoutQaPairNestedInputSchema } from './SubjectUpdateManyWithoutQaPairNestedInputSchema';

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
