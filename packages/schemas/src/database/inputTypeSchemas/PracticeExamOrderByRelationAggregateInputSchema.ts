import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const PracticeExamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PracticeExamOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default PracticeExamOrderByRelationAggregateInputSchema;