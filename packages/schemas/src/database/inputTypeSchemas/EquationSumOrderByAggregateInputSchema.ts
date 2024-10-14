import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EquationSumOrderByAggregateInputSchema: z.ZodType<Prisma.EquationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EquationSumOrderByAggregateInputSchema;
