import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WhiteboardOrderByRelevanceInputSchema } from './WhiteboardOrderByRelevanceInputSchema';

export const WhiteboardOrderByWithRelationInputSchema: z.ZodType<Prisma.WhiteboardOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => WhiteboardOrderByRelevanceInputSchema).optional()
}).strict();

export default WhiteboardOrderByWithRelationInputSchema;
