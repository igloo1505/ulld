import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const KanBanCardOrderByRelationAggregateInputSchema: z.ZodType<Prisma.KanBanCardOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default KanBanCardOrderByRelationAggregateInputSchema;
