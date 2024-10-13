import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const DietAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DietAvgOrderByAggregateInput> = z.object({
  carb: z.lazy(() => SortOrderSchema).optional(),
  pro: z.lazy(() => SortOrderSchema).optional(),
  fat: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DietAvgOrderByAggregateInputSchema;