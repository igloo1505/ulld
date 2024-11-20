import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PluginSettingsWhereInputSchema: z.ZodType<Prisma.PluginSettingsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PluginSettingsWhereInputSchema),z.lazy(() => PluginSettingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PluginSettingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PluginSettingsWhereInputSchema),z.lazy(() => PluginSettingsWhereInputSchema).array() ]).optional(),
  pluginName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.lazy(() => JsonFilterSchema).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PluginSettingsWhereInputSchema;
