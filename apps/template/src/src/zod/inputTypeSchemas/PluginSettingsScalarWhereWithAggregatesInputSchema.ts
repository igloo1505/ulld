import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const PluginSettingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PluginSettingsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PluginSettingsScalarWhereWithAggregatesInputSchema),z.lazy(() => PluginSettingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PluginSettingsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PluginSettingsScalarWhereWithAggregatesInputSchema),z.lazy(() => PluginSettingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  pluginName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  data: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PluginSettingsScalarWhereWithAggregatesInputSchema;
