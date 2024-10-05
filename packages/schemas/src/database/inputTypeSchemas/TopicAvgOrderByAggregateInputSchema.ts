import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TopicAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TopicAvgOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TopicAvgOrderByAggregateInputSchema;
