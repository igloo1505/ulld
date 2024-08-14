import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const QAPairOrderByRelationAggregateInputSchema: z.ZodType<Prisma.QAPairOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default QAPairOrderByRelationAggregateInputSchema;
