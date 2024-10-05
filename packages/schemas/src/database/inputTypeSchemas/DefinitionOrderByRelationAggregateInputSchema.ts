import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DefinitionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DefinitionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DefinitionOrderByRelationAggregateInputSchema;
