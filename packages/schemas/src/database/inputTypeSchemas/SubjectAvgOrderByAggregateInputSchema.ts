import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const SubjectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SubjectAvgOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SubjectAvgOrderByAggregateInputSchema;