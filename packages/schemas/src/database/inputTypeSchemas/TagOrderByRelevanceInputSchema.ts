import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagOrderByRelevanceFieldEnumSchema } from './TagOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const TagOrderByRelevanceInputSchema: z.ZodType<Prisma.TagOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TagOrderByRelevanceFieldEnumSchema),z.lazy(() => TagOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default TagOrderByRelevanceInputSchema;
