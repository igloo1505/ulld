import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PluginSettingsOrderByRelevanceFieldEnumSchema } from './PluginSettingsOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PluginSettingsOrderByRelevanceInputSchema: z.ZodType<Prisma.PluginSettingsOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => PluginSettingsOrderByRelevanceFieldEnumSchema),z.lazy(() => PluginSettingsOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default PluginSettingsOrderByRelevanceInputSchema;
