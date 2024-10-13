import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { EquationOrderByRelationAggregateInputSchema } from '../EquationOrderByRelationAggregateInputSchema.js';
export const RelatedValuesOrderByWithRelationInputSchema: z.ZodType<Prisma.RelatedValuesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional()
}).strict();
export default RelatedValuesOrderByWithRelationInputSchema;