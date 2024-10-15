import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { CitationsGroupOrderByRelevanceFieldEnumSchema } from './CitationsGroupOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const CitationsGroupOrderByRelevanceInputSchema: z.ZodType<Prisma.CitationsGroupOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => CitationsGroupOrderByRelevanceFieldEnumSchema),z.lazy(() => CitationsGroupOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default CitationsGroupOrderByRelevanceInputSchema;