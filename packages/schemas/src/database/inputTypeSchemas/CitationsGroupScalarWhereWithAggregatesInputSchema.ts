import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const CitationsGroupScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CitationsGroupScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema),z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema),z.lazy(() => CitationsGroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default CitationsGroupScalarWhereWithAggregatesInputSchema;
