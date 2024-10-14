import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PracticeExamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PracticeExamOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PracticeExamOrderByRelationAggregateInputSchema;
