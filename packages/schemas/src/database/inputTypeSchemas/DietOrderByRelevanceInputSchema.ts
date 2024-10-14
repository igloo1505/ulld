import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietOrderByRelevanceFieldEnumSchema } from './DietOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DietOrderByRelevanceInputSchema: z.ZodType<Prisma.DietOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DietOrderByRelevanceFieldEnumSchema),z.lazy(() => DietOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DietOrderByRelevanceInputSchema;
