import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SettingsAppendixOrderByRelevanceFieldEnumSchema } from './SettingsAppendixOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SettingsAppendixOrderByRelevanceInputSchema: z.ZodType<Prisma.SettingsAppendixOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SettingsAppendixOrderByRelevanceFieldEnumSchema),z.lazy(() => SettingsAppendixOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default SettingsAppendixOrderByRelevanceInputSchema;