import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const ServingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ServingOrderByRelationAggregateInputSchema;