import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutoSettingOrderByRelevanceFieldEnumSchema } from './AutoSettingOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AutoSettingOrderByRelevanceInputSchema: z.ZodType<Prisma.AutoSettingOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AutoSettingOrderByRelevanceFieldEnumSchema),z.lazy(() => AutoSettingOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default AutoSettingOrderByRelevanceInputSchema;
