import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QuoteWhereInputSchema } from '../QuoteWhereInputSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { StringNullableFilterSchema } from '../StringNullableFilterSchema.js';
import { BoolFilterSchema } from '../BoolFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
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