import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const QAPairOrderByRelationAggregateInputSchema: z.ZodType<Prisma.QAPairOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default QAPairOrderByRelationAggregateInputSchema;