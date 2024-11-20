import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PluginSettingsMinOrderByAggregateInputSchema: z.ZodType<Prisma.PluginSettingsMinOrderByAggregateInput> = z.object({
  pluginName: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PluginSettingsMinOrderByAggregateInputSchema;
