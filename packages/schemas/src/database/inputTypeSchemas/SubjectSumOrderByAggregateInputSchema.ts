import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const SubjectSumOrderByAggregateInputSchema: z.ZodType<Prisma.SubjectSumOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SubjectSumOrderByAggregateInputSchema;