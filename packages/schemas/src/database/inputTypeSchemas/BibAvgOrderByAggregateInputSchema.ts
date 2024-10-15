import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BibAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BibAvgOrderByAggregateInputSchema;