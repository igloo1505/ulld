import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { EquationUpdatevariablesInputSchema } from './EquationUpdatevariablesInputSchema';
import { EquationUpdatekeywordsInputSchema } from './EquationUpdatekeywordsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RelatedValuesUpdateManyWithoutEquationsNestedInputSchema } from './RelatedValuesUpdateManyWithoutEquationsNestedInputSchema';
import { TagUpdateManyWithoutEquationsNestedInputSchema } from './TagUpdateManyWithoutEquationsNestedInputSchema';
import { TopicUpdateManyWithoutEquationsNestedInputSchema } from './TopicUpdateManyWithoutEquationsNestedInputSchema';
import { MdxNoteUpdateManyWithoutEquationsNestedInputSchema } from './MdxNoteUpdateManyWithoutEquationsNestedInputSchema';

export const EquationUpdateWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationUpdateWithoutSubjectsInput> = z.object({
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
  mdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();

export default EquationUpdateWithoutSubjectsInputSchema;
