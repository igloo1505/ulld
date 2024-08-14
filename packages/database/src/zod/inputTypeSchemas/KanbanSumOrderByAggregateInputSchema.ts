import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const KanbanSumOrderByAggregateInputSchema: z.ZodType<Prisma.KanbanSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default KanbanSumOrderByAggregateInputSchema;
