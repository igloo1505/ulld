import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EquationOrderByRelationAggregateInputSchema } from './EquationOrderByRelationAggregateInputSchema';

export const RelatedValuesOrderByWithRelationInputSchema: z.ZodType<Prisma.RelatedValuesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional()
}).strict();

export default RelatedValuesOrderByWithRelationInputSchema;
