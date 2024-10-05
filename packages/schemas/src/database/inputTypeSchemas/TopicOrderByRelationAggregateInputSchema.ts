import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TopicOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TopicOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TopicOrderByRelationAggregateInputSchema;
