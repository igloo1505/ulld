import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibEntryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BibEntryAvgOrderByAggregateInput> = z.object({
  BibId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BibEntryAvgOrderByAggregateInputSchema;