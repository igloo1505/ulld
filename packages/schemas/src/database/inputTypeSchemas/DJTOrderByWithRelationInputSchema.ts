import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DJTOrderByRelevanceInputSchema } from './DJTOrderByRelevanceInputSchema';

export const DJTOrderByWithRelationInputSchema: z.ZodType<Prisma.DJTOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => DJTOrderByRelevanceInputSchema).optional()
}).strict();

export default DJTOrderByWithRelationInputSchema;
