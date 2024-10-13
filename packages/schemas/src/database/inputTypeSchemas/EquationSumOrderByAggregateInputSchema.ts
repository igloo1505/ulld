import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const EquationSumOrderByAggregateInputSchema: z.ZodType<Prisma.EquationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default EquationSumOrderByAggregateInputSchema;