import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const KanbanAvgOrderByAggregateInputSchema: z.ZodType<Prisma.KanbanAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default KanbanAvgOrderByAggregateInputSchema;