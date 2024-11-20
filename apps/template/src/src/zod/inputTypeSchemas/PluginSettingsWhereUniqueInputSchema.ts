import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PluginSettingsWhereInputSchema } from './PluginSettingsWhereInputSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PluginSettingsWhereUniqueInputSchema: z.ZodType<Prisma.PluginSettingsWhereUniqueInput> = z.object({
  pluginName: z.string()
})
.and(z.object({
  pluginName: z.string().optional(),
  AND: z.union([ z.lazy(() => PluginSettingsWhereInputSchema),z.lazy(() => PluginSettingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PluginSettingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PluginSettingsWhereInputSchema),z.lazy(() => PluginSettingsWhereInputSchema).array() ]).optional(),
  data: z.lazy(() => JsonFilterSchema).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default PluginSettingsWhereUniqueInputSchema;
