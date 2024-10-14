import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const CitationsGroupMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CitationsGroupMaxOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default CitationsGroupMaxOrderByAggregateInputSchema;