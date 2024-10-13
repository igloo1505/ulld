import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairOrderByRelevanceFieldEnumSchema } from '../QAPairOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const QAPairOrderByRelevanceInputSchema: z.ZodType<Prisma.QAPairOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => QAPairOrderByRelevanceFieldEnumSchema),z.lazy(() => QAPairOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default QAPairOrderByRelevanceInputSchema;