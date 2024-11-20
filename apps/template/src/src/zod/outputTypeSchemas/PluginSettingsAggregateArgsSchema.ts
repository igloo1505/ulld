import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsWhereInputSchema } from '../inputTypeSchemas/PluginSettingsWhereInputSchema'
import { PluginSettingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PluginSettingsOrderByWithRelationInputSchema'
import { PluginSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/PluginSettingsWhereUniqueInputSchema'

export const PluginSettingsAggregateArgsSchema: z.ZodType<Prisma.PluginSettingsAggregateArgs> = z.object({
  where: PluginSettingsWhereInputSchema.optional(),
  orderBy: z.union([ PluginSettingsOrderByWithRelationInputSchema.array(),PluginSettingsOrderByWithRelationInputSchema ]).optional(),
  cursor: PluginSettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PluginSettingsAggregateArgsSchema;
