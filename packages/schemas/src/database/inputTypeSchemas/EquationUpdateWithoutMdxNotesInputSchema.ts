import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { JsonNullValueInputSchema } from '../JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from '../InputJsonValueSchema.js';
import { EquationUpdatevariablesInputSchema } from '../EquationUpdatevariablesInputSchema.js';
import { EquationUpdatekeywordsInputSchema } from '../EquationUpdatekeywordsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { RelatedValuesUpdateManyWithoutEquationsNestedInputSchema } from '../RelatedValuesUpdateManyWithoutEquationsNestedInputSchema.js';
import { TagUpdateManyWithoutEquationsNestedInputSchema } from '../TagUpdateManyWithoutEquationsNestedInputSchema.js';
import { TopicUpdateManyWithoutEquationsNestedInputSchema } from '../TopicUpdateManyWithoutEquationsNestedInputSchema.js';
import { SubjectUpdateManyWithoutEquationsNestedInputSchema } from '../SubjectUpdateManyWithoutEquationsNestedInputSchema.js';
export const EquationUpdateWithoutMdxNotesInputSchema: z.ZodType<Prisma.EquationUpdateWithoutMdxNotesInput> = z.object({
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
  relatedValues: z.lazy(() => RelatedValuesUpdateManyWithoutEquationsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutEquationsNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();
export default EquationUpdateWithoutMdxNotesInputSchema;