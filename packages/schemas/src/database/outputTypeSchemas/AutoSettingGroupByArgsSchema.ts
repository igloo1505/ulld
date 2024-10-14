import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema.js'
import { AutoSettingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AutoSettingOrderByWithAggregationInputSchema.js'
import { AutoSettingScalarFieldEnumSchema } from '../inputTypeSchemas/AutoSettingScalarFieldEnumSchema.js'
import { AutoSettingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AutoSettingScalarWhereWithAggregatesInputSchema.js'
export const AutoSettingGroupByArgsSchema: z.ZodType<Prisma.AutoSettingGroupByArgs> = z.object({
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([ AutoSettingOrderByWithAggregationInputSchema.array(),AutoSettingOrderByWithAggregationInputSchema ]).optional(),
  by: AutoSettingScalarFieldEnumSchema.array(),
  having: AutoSettingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default AutoSettingGroupByArgsSchema;