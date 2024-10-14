import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema.js';
export const ReadingListScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReadingListScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema),z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema),z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default ReadingListScalarWhereWithAggregatesInputSchema;