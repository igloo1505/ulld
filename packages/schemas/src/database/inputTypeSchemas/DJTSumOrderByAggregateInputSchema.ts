import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const DJTSumOrderByAggregateInputSchema: z.ZodType<Prisma.DJTSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DJTSumOrderByAggregateInputSchema;