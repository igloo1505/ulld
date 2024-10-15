import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { WhiteboardOrderByRelevanceInputSchema } from './WhiteboardOrderByRelevanceInputSchema.js';
export const WhiteboardOrderByWithRelationInputSchema: z.ZodType<Prisma.WhiteboardOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => WhiteboardOrderByRelevanceInputSchema).optional()
}).strict();
export default WhiteboardOrderByWithRelationInputSchema;