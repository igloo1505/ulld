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
import { TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema';

export const EquationUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.EquationUncheckedUpdateWithoutTagsInput> = z.object({
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
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();

export default EquationUncheckedUpdateWithoutTagsInputSchema;