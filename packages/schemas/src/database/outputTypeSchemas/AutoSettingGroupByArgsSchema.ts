import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema'
import { AutoSettingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AutoSettingOrderByWithAggregationInputSchema'
import { AutoSettingScalarFieldEnumSchema } from '../inputTypeSchemas/AutoSettingScalarFieldEnumSchema'
import { AutoSettingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AutoSettingScalarWhereWithAggregatesInputSchema'

export const AutoSettingGroupByArgsSchema: z.ZodType<Prisma.AutoSettingGroupByArgs> = z.object({
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([ AutoSettingOrderByWithAggregationInputSchema.array(),AutoSettingOrderByWithAggregationInputSchema ]).optional(),
  by: AutoSettingScalarFieldEnumSchema.array(),
  having: AutoSettingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AutoSettingGroupByArgsSchema;
