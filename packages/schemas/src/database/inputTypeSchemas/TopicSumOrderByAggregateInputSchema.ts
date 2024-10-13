import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const TopicSumOrderByAggregateInputSchema: z.ZodType<Prisma.TopicSumOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TopicSumOrderByAggregateInputSchema;