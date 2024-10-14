import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TopicScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TopicScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TopicScalarWhereWithAggregatesInputSchema),z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TopicScalarWhereWithAggregatesInputSchema),z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  kanbanId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default TopicScalarWhereWithAggregatesInputSchema;
