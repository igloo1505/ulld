import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { EquationCreatevariablesInputSchema } from './EquationCreatevariablesInputSchema';
import { EquationCreatekeywordsInputSchema } from './EquationCreatekeywordsInputSchema';
import { RelatedValuesCreateNestedManyWithoutEquationsInputSchema } from './RelatedValuesCreateNestedManyWithoutEquationsInputSchema';
import { TopicCreateNestedManyWithoutEquationsInputSchema } from './TopicCreateNestedManyWithoutEquationsInputSchema';
import { SubjectCreateNestedManyWithoutEquationsInputSchema } from './SubjectCreateNestedManyWithoutEquationsInputSchema';
import { MdxNoteCreateNestedManyWithoutEquationsInputSchema } from './MdxNoteCreateNestedManyWithoutEquationsInputSchema';

export const EquationCreateWithoutTagsInputSchema: z.ZodType<Prisma.EquationCreateWithoutTagsInput> = z.object({
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
  relatedValues: z.lazy(() => RelatedValuesCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();

export default EquationCreateWithoutTagsInputSchema;
