import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DJTOrderByRelevanceFieldEnumSchema } from './DJTOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DJTOrderByRelevanceInputSchema: z.ZodType<Prisma.DJTOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DJTOrderByRelevanceFieldEnumSchema),z.lazy(() => DJTOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DJTOrderByRelevanceInputSchema;
