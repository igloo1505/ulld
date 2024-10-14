import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TagUncheckedUpdateManyWithoutQAPairNestedInputSchema } from './TagUncheckedUpdateManyWithoutQAPairNestedInputSchema';
import { TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema } from './TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema';

export const QAPairUncheckedUpdateWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUncheckedUpdateWithoutPracticeExamInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  question: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  secondaryLabel: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  correctCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inCorrectCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutQAPairNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema).optional()
}).strict();

export default QAPairUncheckedUpdateWithoutPracticeExamInputSchema;
