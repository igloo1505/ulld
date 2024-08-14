import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SettingsAppendixOrderByRelevanceFieldEnumSchema } from './SettingsAppendixOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const SettingsAppendixOrderByRelevanceInputSchema: z.ZodType<Prisma.SettingsAppendixOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SettingsAppendixOrderByRelevanceFieldEnumSchema),z.lazy(() => SettingsAppendixOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default SettingsAppendixOrderByRelevanceInputSchema;
