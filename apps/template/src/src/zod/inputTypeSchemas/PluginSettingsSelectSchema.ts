import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PluginSettingsSelectSchema: z.ZodType<Prisma.PluginSettingsSelect> = z.object({
  pluginName: z.boolean().optional(),
  data: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
}).strict()

export default PluginSettingsSelectSchema;
