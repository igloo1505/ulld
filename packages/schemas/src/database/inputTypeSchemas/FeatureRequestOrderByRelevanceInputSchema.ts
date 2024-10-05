import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FeatureRequestOrderByRelevanceFieldEnumSchema } from './FeatureRequestOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const FeatureRequestOrderByRelevanceInputSchema: z.ZodType<Prisma.FeatureRequestOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => FeatureRequestOrderByRelevanceFieldEnumSchema),z.lazy(() => FeatureRequestOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default FeatureRequestOrderByRelevanceInputSchema;
