import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubjectSumOrderByAggregateInputSchema: z.ZodType<Prisma.SubjectSumOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubjectSumOrderByAggregateInputSchema;
