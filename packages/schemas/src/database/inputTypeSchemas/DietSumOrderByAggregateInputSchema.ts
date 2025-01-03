import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DietSumOrderByAggregateInputSchema: z.ZodType<Prisma.DietSumOrderByAggregateInput> = z.object({
  carb: z.lazy(() => SortOrderSchema).optional(),
  pro: z.lazy(() => SortOrderSchema).optional(),
  fat: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DietSumOrderByAggregateInputSchema;