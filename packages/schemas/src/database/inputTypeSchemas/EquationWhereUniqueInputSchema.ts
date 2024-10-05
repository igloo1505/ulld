import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereInputSchema } from './EquationWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { RelatedValuesListRelationFilterSchema } from './RelatedValuesListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema';

export const EquationWhereUniqueInputSchema: z.ZodType<Prisma.EquationWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    equationId: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    equationId: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  equationId: z.string().optional(),
  AND: z.union([ z.lazy(() => EquationWhereInputSchema),z.lazy(() => EquationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EquationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EquationWhereInputSchema),z.lazy(() => EquationWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  desc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  asPython: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  variableLegend: z.lazy(() => JsonFilterSchema).optional(),
  variables: z.lazy(() => StringNullableListFilterSchema).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  relatedValues: z.lazy(() => RelatedValuesListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional()
}).strict());

export default EquationWhereUniqueInputSchema;
