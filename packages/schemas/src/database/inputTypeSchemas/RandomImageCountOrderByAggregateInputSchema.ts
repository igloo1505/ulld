import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const RandomImageCountOrderByAggregateInputSchema: z.ZodType<Prisma.RandomImageCountOrderByAggregateInput> = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default RandomImageCountOrderByAggregateInputSchema;