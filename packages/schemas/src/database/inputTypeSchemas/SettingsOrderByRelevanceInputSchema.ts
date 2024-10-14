import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SettingsOrderByRelevanceFieldEnumSchema } from './SettingsOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SettingsOrderByRelevanceInputSchema: z.ZodType<Prisma.SettingsOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SettingsOrderByRelevanceFieldEnumSchema),z.lazy(() => SettingsOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SettingsOrderByRelevanceInputSchema;
