import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DJTOrderByRelevanceFieldEnumSchema } from './DJTOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DJTOrderByRelevanceInputSchema: z.ZodType<Prisma.DJTOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DJTOrderByRelevanceFieldEnumSchema),z.lazy(() => DJTOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default DJTOrderByRelevanceInputSchema;