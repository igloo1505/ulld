import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const PluginSettingsCreateInputSchema: z.ZodType<Prisma.PluginSettingsCreateInput> = z.object({
  pluginName: z.string(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional()
}).strict();

export default PluginSettingsCreateInputSchema;
