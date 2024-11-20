import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PluginSettingsCountOrderByAggregateInputSchema: z.ZodType<Prisma.PluginSettingsCountOrderByAggregateInput> = z.object({
  pluginName: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PluginSettingsCountOrderByAggregateInputSchema;
