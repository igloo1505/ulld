import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ServingMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.lazy(() => SortOrderSchema).optional(),
  quant_guess: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ServingMaxOrderByAggregateInputSchema;
