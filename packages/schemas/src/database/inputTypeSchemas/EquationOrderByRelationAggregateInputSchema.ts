import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EquationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EquationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EquationOrderByRelationAggregateInputSchema;
