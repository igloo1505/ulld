import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IpynbOrderByRelationAggregateInputSchema: z.ZodType<Prisma.IpynbOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default IpynbOrderByRelationAggregateInputSchema;
