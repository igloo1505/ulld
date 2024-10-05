import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema'
import { SettingsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SettingsOrderByWithAggregationInputSchema'
import { SettingsScalarFieldEnumSchema } from '../inputTypeSchemas/SettingsScalarFieldEnumSchema'
import { SettingsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SettingsScalarWhereWithAggregatesInputSchema'

export const SettingsGroupByArgsSchema: z.ZodType<Prisma.SettingsGroupByArgs> = z.object({
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([ SettingsOrderByWithAggregationInputSchema.array(),SettingsOrderByWithAggregationInputSchema ]).optional(),
  by: SettingsScalarFieldEnumSchema.array(),
  having: SettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SettingsGroupByArgsSchema;
