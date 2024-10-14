import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const KanBanCardAvgOrderByAggregateInputSchema: z.ZodType<Prisma.KanBanCardAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.lazy(() => SortOrderSchema).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default KanBanCardAvgOrderByAggregateInputSchema;
