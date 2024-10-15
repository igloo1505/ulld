import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from './InputJsonValueSchema.js';
import { EquationUpdatevariablesInputSchema } from './EquationUpdatevariablesInputSchema.js';
import { EquationUpdatekeywordsInputSchema } from './EquationUpdatekeywordsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema.js';
import { TagUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './TagUncheckedUpdateManyWithoutEquationsNestedInputSchema.js';
import { TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema.js';
export const EquationUncheckedUpdateInputSchema: z.ZodType<Prisma.EquationUncheckedUpdateInput> = z.object({
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
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();
export default EquationUncheckedUpdateInputSchema;