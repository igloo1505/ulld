import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const ServingSumOrderByAggregateInputSchema: z.ZodType<Prisma.ServingSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ServingSumOrderByAggregateInputSchema;