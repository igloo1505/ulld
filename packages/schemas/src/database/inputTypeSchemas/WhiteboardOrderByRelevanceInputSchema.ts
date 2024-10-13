import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { WhiteboardOrderByRelevanceFieldEnumSchema } from '../WhiteboardOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const WhiteboardOrderByRelevanceInputSchema: z.ZodType<Prisma.WhiteboardOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WhiteboardOrderByRelevanceFieldEnumSchema),z.lazy(() => WhiteboardOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default WhiteboardOrderByRelevanceInputSchema;