import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsCreateInputSchema } from '../inputTypeSchemas/PluginSettingsCreateInputSchema'
import { PluginSettingsUncheckedCreateInputSchema } from '../inputTypeSchemas/PluginSettingsUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PluginSettingsSelectSchema: z.ZodType<Prisma.PluginSettingsSelect> = z.object({
  pluginName: z.boolean().optional(),
  data: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
}).strict()

export const PluginSettingsCreateArgsSchema: z.ZodType<Prisma.PluginSettingsCreateArgs> = z.object({
  select: PluginSettingsSelectSchema.optional(),
  data: z.union([ PluginSettingsCreateInputSchema,PluginSettingsUncheckedCreateInputSchema ]),
}).strict() ;

export default PluginSettingsCreateArgsSchema;
