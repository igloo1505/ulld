import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TopicOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TopicOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TopicOrderByRelationAggregateInputSchema;