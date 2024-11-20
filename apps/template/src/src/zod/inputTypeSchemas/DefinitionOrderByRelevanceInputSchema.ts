import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefinitionOrderByRelevanceFieldEnumSchema } from './DefinitionOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const DefinitionOrderByRelevanceInputSchema: z.ZodType<Prisma.DefinitionOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DefinitionOrderByRelevanceFieldEnumSchema),z.lazy(() => DefinitionOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default DefinitionOrderByRelevanceInputSchema;
