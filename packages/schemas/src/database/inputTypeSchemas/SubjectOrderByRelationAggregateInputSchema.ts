import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const SubjectOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubjectOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SubjectOrderByRelationAggregateInputSchema;