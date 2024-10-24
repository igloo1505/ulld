import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TopicAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TopicAvgOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TopicAvgOrderByAggregateInputSchema;