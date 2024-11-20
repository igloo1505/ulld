import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsWhereInputSchema } from '../inputTypeSchemas/PluginSettingsWhereInputSchema'
import { PluginSettingsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PluginSettingsOrderByWithAggregationInputSchema'
import { PluginSettingsScalarFieldEnumSchema } from '../inputTypeSchemas/PluginSettingsScalarFieldEnumSchema'
import { PluginSettingsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PluginSettingsScalarWhereWithAggregatesInputSchema'

export const PluginSettingsGroupByArgsSchema: z.ZodType<Prisma.PluginSettingsGroupByArgs> = z.object({
  where: PluginSettingsWhereInputSchema.optional(),
  orderBy: z.union([ PluginSettingsOrderByWithAggregationInputSchema.array(),PluginSettingsOrderByWithAggregationInputSchema ]).optional(),
  by: PluginSettingsScalarFieldEnumSchema.array(),
  having: PluginSettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PluginSettingsGroupByArgsSchema;
