import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DJTOrderByRelevanceInputSchema } from './DJTOrderByRelevanceInputSchema';

export const DJTOrderByWithRelationInputSchema: z.ZodType<Prisma.DJTOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pluginName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  modelId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utilityStringField: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utilityNumberField: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utilityDateField: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utilityDateFieldTwo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => DJTOrderByRelevanceInputSchema).optional()
}).strict();

export default DJTOrderByWithRelationInputSchema;
