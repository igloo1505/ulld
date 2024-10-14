import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicOrderByRelevanceFieldEnumSchema } from './TopicOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TopicOrderByRelevanceInputSchema: z.ZodType<Prisma.TopicOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TopicOrderByRelevanceFieldEnumSchema),z.lazy(() => TopicOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TopicOrderByRelevanceInputSchema;
