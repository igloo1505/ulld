import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubjectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SubjectAvgOrderByAggregateInput> = z.object({
  kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubjectAvgOrderByAggregateInputSchema;
