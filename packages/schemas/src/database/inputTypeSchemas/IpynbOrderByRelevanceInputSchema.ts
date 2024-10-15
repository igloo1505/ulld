import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbOrderByRelevanceFieldEnumSchema } from './IpynbOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const IpynbOrderByRelevanceInputSchema: z.ZodType<Prisma.IpynbOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => IpynbOrderByRelevanceFieldEnumSchema),z.lazy(() => IpynbOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default IpynbOrderByRelevanceInputSchema;