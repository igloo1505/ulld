import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairOrderByRelevanceFieldEnumSchema } from './QAPairOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const QAPairOrderByRelevanceInputSchema: z.ZodType<Prisma.QAPairOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => QAPairOrderByRelevanceFieldEnumSchema),z.lazy(() => QAPairOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default QAPairOrderByRelevanceInputSchema;
