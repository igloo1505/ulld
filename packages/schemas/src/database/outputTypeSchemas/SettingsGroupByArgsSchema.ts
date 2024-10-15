import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema.js'
import { SettingsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SettingsOrderByWithAggregationInputSchema.js'
import { SettingsScalarFieldEnumSchema } from '../inputTypeSchemas/SettingsScalarFieldEnumSchema.js'
import { SettingsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SettingsScalarWhereWithAggregatesInputSchema.js'
export const SettingsGroupByArgsSchema: z.ZodType<Prisma.SettingsGroupByArgs> = z.object({
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([ SettingsOrderByWithAggregationInputSchema.array(),SettingsOrderByWithAggregationInputSchema ]).optional(),
  by: SettingsScalarFieldEnumSchema.array(),
  having: SettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SettingsGroupByArgsSchema;