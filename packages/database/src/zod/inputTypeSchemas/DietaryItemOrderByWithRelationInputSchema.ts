import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DietOrderByRelationAggregateInputSchema } from './DietOrderByRelationAggregateInputSchema';
import { ServingOrderByRelationAggregateInputSchema } from './ServingOrderByRelationAggregateInputSchema';
import { DietaryItemOrderByRelevanceInputSchema } from './DietaryItemOrderByRelevanceInputSchema';

export const DietaryItemOrderByWithRelationInputSchema: z.ZodType<Prisma.DietaryItemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  barcode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gi: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  calsPerOz: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  glutenFree: z.lazy(() => SortOrderSchema).optional(),
  minimalFructose: z.lazy(() => SortOrderSchema).optional(),
  natural: z.lazy(() => SortOrderSchema).optional(),
  organic: z.lazy(() => SortOrderSchema).optional(),
  impactScore: z.lazy(() => SortOrderSchema).optional(),
  Diet: z.lazy(() => DietOrderByRelationAggregateInputSchema).optional(),
  Serving: z.lazy(() => ServingOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => DietaryItemOrderByRelevanceInputSchema).optional()
}).strict();

export default DietaryItemOrderByWithRelationInputSchema;
