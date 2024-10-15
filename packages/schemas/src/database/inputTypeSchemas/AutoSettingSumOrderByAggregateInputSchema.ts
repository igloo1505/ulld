import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const AutoSettingSumOrderByAggregateInputSchema: z.ZodType<Prisma.AutoSettingSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default AutoSettingSumOrderByAggregateInputSchema;