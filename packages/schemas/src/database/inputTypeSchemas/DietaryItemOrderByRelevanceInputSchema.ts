import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemOrderByRelevanceFieldEnumSchema } from '../DietaryItemOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const DietaryItemOrderByRelevanceInputSchema: z.ZodType<Prisma.DietaryItemOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DietaryItemOrderByRelevanceFieldEnumSchema),z.lazy(() => DietaryItemOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default DietaryItemOrderByRelevanceInputSchema;