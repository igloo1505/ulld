import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DJTAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DJTAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DJTAvgOrderByAggregateInputSchema;