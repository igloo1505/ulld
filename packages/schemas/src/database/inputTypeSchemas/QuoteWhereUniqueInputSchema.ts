import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuoteWhereInputSchema } from './QuoteWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const QuoteWhereUniqueInputSchema: z.ZodType<Prisma.QuoteWhereUniqueInput> = z.object({
  body: z.string()
})
.and(z.object({
  body: z.string().optional(),
  AND: z.union([ z.lazy(() => QuoteWhereInputSchema),z.lazy(() => QuoteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuoteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuoteWhereInputSchema),z.lazy(() => QuoteWhereInputSchema).array() ]).optional(),
  author: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  source: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pinned: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default QuoteWhereUniqueInputSchema;
