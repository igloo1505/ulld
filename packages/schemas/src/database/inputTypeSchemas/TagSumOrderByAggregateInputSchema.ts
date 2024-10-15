import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TagSumOrderByAggregateInputSchema: z.ZodType<Prisma.TagSumOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TagSumOrderByAggregateInputSchema;