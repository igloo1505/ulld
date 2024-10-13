import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietOrderByRelevanceFieldEnumSchema } from '../DietOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const DietOrderByRelevanceInputSchema: z.ZodType<Prisma.DietOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DietOrderByRelevanceFieldEnumSchema),z.lazy(() => DietOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default DietOrderByRelevanceInputSchema;