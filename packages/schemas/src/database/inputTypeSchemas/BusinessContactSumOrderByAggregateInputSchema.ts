import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const BusinessContactSumOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessContactSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BusinessContactSumOrderByAggregateInputSchema;