import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const KanbanSumOrderByAggregateInputSchema: z.ZodType<Prisma.KanbanSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default KanbanSumOrderByAggregateInputSchema;