import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/PluginSettingsWhereUniqueInputSchema'
import { PluginSettingsCreateInputSchema } from '../inputTypeSchemas/PluginSettingsCreateInputSchema'
import { PluginSettingsUncheckedCreateInputSchema } from '../inputTypeSchemas/PluginSettingsUncheckedCreateInputSchema'
import { PluginSettingsUpdateInputSchema } from '../inputTypeSchemas/PluginSettingsUpdateInputSchema'
import { PluginSettingsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PluginSettingsUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PluginSettingsSelectSchema: z.ZodType<Prisma.PluginSettingsSelect> = z.object({
  pluginName: z.boolean().optional(),
  data: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
}).strict()

export const PluginSettingsUpsertArgsSchema: z.ZodType<Prisma.PluginSettingsUpsertArgs> = z.object({
  select: PluginSettingsSelectSchema.optional(),
  where: PluginSettingsWhereUniqueInputSchema,
  create: z.union([ PluginSettingsCreateInputSchema,PluginSettingsUncheckedCreateInputSchema ]),
  update: z.union([ PluginSettingsUpdateInputSchema,PluginSettingsUncheckedUpdateInputSchema ]),
}).strict() ;

export default PluginSettingsUpsertArgsSchema;
