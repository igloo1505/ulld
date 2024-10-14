import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BusinessContactSumOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessContactSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BusinessContactSumOrderByAggregateInputSchema;
