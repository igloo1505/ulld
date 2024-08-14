import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EquationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EquationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EquationAvgOrderByAggregateInputSchema;
