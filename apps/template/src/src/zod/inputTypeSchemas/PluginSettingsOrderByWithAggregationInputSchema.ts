import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PluginSettingsCountOrderByAggregateInputSchema } from './PluginSettingsCountOrderByAggregateInputSchema';
import { PluginSettingsMaxOrderByAggregateInputSchema } from './PluginSettingsMaxOrderByAggregateInputSchema';
import { PluginSettingsMinOrderByAggregateInputSchema } from './PluginSettingsMinOrderByAggregateInputSchema';

export const PluginSettingsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PluginSettingsOrderByWithAggregationInput> = z.object({
  pluginName: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PluginSettingsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PluginSettingsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PluginSettingsMinOrderByAggregateInputSchema).optional()
}).strict();

export default PluginSettingsOrderByWithAggregationInputSchema;
