import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const RandomImageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RandomImageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema),z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema),z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  path: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RandomImageScalarWhereWithAggregatesInputSchema;
