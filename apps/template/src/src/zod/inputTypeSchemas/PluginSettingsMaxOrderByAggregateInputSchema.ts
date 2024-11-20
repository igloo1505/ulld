import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PluginSettingsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PluginSettingsMaxOrderByAggregateInput> = z.object({
  pluginName: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PluginSettingsMaxOrderByAggregateInputSchema;
