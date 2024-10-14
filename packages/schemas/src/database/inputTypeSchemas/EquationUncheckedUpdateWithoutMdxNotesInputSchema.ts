import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { EquationUpdatevariablesInputSchema } from './EquationUpdatevariablesInputSchema';
import { EquationUpdatekeywordsInputSchema } from './EquationUpdatekeywordsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema';
import { TagUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './TagUncheckedUpdateManyWithoutEquationsNestedInputSchema';
import { TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema';

export const EquationUncheckedUpdateWithoutMdxNotesInputSchema: z.ZodType<Prisma.EquationUncheckedUpdateWithoutMdxNotesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  equationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  asPython: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  variableLegend: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  variables: z.union([ z.lazy(() => EquationUpdatevariablesInputSchema),z.string().array() ]).optional(),
  keywords: z.union([ z.lazy(() => EquationUpdatekeywordsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  relatedValues: z.lazy(() => RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();

export default EquationUncheckedUpdateWithoutMdxNotesInputSchema;
