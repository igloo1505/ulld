import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/PluginSettingsWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PluginSettingsSelectSchema: z.ZodType<Prisma.PluginSettingsSelect> = z.object({
  pluginName: z.boolean().optional(),
  data: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
}).strict()

export const PluginSettingsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PluginSettingsFindUniqueOrThrowArgs> = z.object({
  select: PluginSettingsSelectSchema.optional(),
  where: PluginSettingsWhereUniqueInputSchema,
}).strict() ;

export default PluginSettingsFindUniqueOrThrowArgsSchema;
