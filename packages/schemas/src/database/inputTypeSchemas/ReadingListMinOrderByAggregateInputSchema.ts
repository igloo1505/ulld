import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const ReadingListMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReadingListMinOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ReadingListMinOrderByAggregateInputSchema;