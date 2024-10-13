import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SettingsOrderByRelevanceFieldEnumSchema } from '../SettingsOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const SettingsOrderByRelevanceInputSchema: z.ZodType<Prisma.SettingsOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SettingsOrderByRelevanceFieldEnumSchema),z.lazy(() => SettingsOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default SettingsOrderByRelevanceInputSchema;