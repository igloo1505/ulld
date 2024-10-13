import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const ReadingListMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReadingListMaxOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ReadingListMaxOrderByAggregateInputSchema;