import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsUpdateInputSchema } from '../inputTypeSchemas/PluginSettingsUpdateInputSchema'
import { PluginSettingsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PluginSettingsUncheckedUpdateInputSchema'
import { PluginSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/PluginSettingsWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PluginSettingsSelectSchema: z.ZodType<Prisma.PluginSettingsSelect> = z.object({
  pluginName: z.boolean().optional(),
  data: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
}).strict()

export const PluginSettingsUpdateArgsSchema: z.ZodType<Prisma.PluginSettingsUpdateArgs> = z.object({
  select: PluginSettingsSelectSchema.optional(),
  data: z.union([ PluginSettingsUpdateInputSchema,PluginSettingsUncheckedUpdateInputSchema ]),
  where: PluginSettingsWhereUniqueInputSchema,
}).strict() ;

export default PluginSettingsUpdateArgsSchema;
