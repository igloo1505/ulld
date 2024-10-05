import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const QuoteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QuoteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema),z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema),z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  body: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  author: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  source: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  pinned: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default QuoteScalarWhereWithAggregatesInputSchema;
