import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema.js'
import { SettingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SettingsOrderByWithRelationInputSchema.js'
import { SettingsWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsWhereUniqueInputSchema.js'
export const SettingsAggregateArgsSchema: z.ZodType<Prisma.SettingsAggregateArgs> = z.object({
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([ SettingsOrderByWithRelationInputSchema.array(),SettingsOrderByWithRelationInputSchema ]).optional(),
  cursor: SettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SettingsAggregateArgsSchema;