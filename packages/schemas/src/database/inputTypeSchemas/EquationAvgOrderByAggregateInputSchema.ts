import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const EquationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EquationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default EquationAvgOrderByAggregateInputSchema;