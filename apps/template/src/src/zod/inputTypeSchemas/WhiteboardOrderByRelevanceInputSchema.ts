import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WhiteboardOrderByRelevanceFieldEnumSchema } from './WhiteboardOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const WhiteboardOrderByRelevanceInputSchema: z.ZodType<Prisma.WhiteboardOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WhiteboardOrderByRelevanceFieldEnumSchema),z.lazy(() => WhiteboardOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default WhiteboardOrderByRelevanceInputSchema;
