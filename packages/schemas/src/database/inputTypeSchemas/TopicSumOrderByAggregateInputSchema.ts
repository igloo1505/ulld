import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TopicSumOrderByAggregateInputSchema: z.ZodType<Prisma.TopicSumOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TopicSumOrderByAggregateInputSchema;
