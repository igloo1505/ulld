import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PluginSettingsOrderByRelevanceInputSchema } from './PluginSettingsOrderByRelevanceInputSchema';

export const PluginSettingsOrderByWithRelationInputSchema: z.ZodType<Prisma.PluginSettingsOrderByWithRelationInput> = z.object({
  pluginName: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => PluginSettingsOrderByRelevanceInputSchema).optional()
}).strict();

export default PluginSettingsOrderByWithRelationInputSchema;
