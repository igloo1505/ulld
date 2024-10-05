import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubjectOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubjectOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubjectOrderByRelationAggregateInputSchema;
