import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DietaryItemOrderByWithRelationInputSchema } from './DietaryItemOrderByWithRelationInputSchema';

export const ServingOrderByWithRelationInputSchema: z.ZodType<Prisma.ServingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  quant_guess: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  item: z.lazy(() => DietaryItemOrderByWithRelationInputSchema).optional()
}).strict();

export default ServingOrderByWithRelationInputSchema;
