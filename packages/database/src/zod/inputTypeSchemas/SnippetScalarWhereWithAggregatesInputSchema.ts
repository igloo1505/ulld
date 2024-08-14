import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SnippetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SnippetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema),z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema),z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  language: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default SnippetScalarWhereWithAggregatesInputSchema;
