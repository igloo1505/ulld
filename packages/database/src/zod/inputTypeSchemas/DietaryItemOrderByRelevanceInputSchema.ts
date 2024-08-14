import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemOrderByRelevanceFieldEnumSchema } from './DietaryItemOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DietaryItemOrderByRelevanceInputSchema: z.ZodType<Prisma.DietaryItemOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DietaryItemOrderByRelevanceFieldEnumSchema),z.lazy(() => DietaryItemOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DietaryItemOrderByRelevanceInputSchema;
