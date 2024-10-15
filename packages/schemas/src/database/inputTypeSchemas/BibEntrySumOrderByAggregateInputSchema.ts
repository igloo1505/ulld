import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibEntrySumOrderByAggregateInputSchema: z.ZodType<Prisma.BibEntrySumOrderByAggregateInput> = z.object({
  BibId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BibEntrySumOrderByAggregateInputSchema;