import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsWhereInputSchema } from '../inputTypeSchemas/PluginSettingsWhereInputSchema'
import { PluginSettingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PluginSettingsOrderByWithRelationInputSchema'
import { PluginSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/PluginSettingsWhereUniqueInputSchema'
import { PluginSettingsScalarFieldEnumSchema } from '../inputTypeSchemas/PluginSettingsScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PluginSettingsSelectSchema: z.ZodType<Prisma.PluginSettingsSelect> = z.object({
  pluginName: z.boolean().optional(),
  data: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
}).strict()

export const PluginSettingsFindFirstArgsSchema: z.ZodType<Prisma.PluginSettingsFindFirstArgs> = z.object({
  select: PluginSettingsSelectSchema.optional(),
  where: PluginSettingsWhereInputSchema.optional(),
  orderBy: z.union([ PluginSettingsOrderByWithRelationInputSchema.array(),PluginSettingsOrderByWithRelationInputSchema ]).optional(),
  cursor: PluginSettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PluginSettingsScalarFieldEnumSchema,PluginSettingsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PluginSettingsFindFirstArgsSchema;
