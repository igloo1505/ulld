import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { EquationCreatevariablesInputSchema } from './EquationCreatevariablesInputSchema';
import { EquationCreatekeywordsInputSchema } from './EquationCreatekeywordsInputSchema';
import { TagUncheckedCreateNestedManyWithoutEquationsInputSchema } from './TagUncheckedCreateNestedManyWithoutEquationsInputSchema';
import { TopicUncheckedCreateNestedManyWithoutEquationsInputSchema } from './TopicUncheckedCreateNestedManyWithoutEquationsInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema } from './SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema';
import { MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema';

export const EquationUncheckedCreateWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUncheckedCreateWithoutRelatedValuesInput> = z.object({
  id: z.number().int().optional(),
  equationId: z.string().optional().nullable(),
  title: z.string(),
  desc: z.string().optional().nullable(),
  content: z.string(),
  asPython: z.string().optional().nullable(),
  variableLegend: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  variables: z.union([ z.lazy(() => EquationCreatevariablesInputSchema),z.string().array() ]).optional(),
  keywords: z.union([ z.lazy(() => EquationCreatekeywordsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();

export default EquationUncheckedCreateWithoutRelatedValuesInputSchema;
